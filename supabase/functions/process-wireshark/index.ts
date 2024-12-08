import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { generateSimulatedPacket } from './packetGenerator.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { action } = await req.json()
    console.log('Processing simulation action:', action)

    if (action === 'simulate') {
      // Generate initial simulated packets
      const packets = Array.from({ length: 5 }, () => generateSimulatedPacket())
      
      console.log('Generated initial packets:', packets)

      // Store simulated packets in Supabase
      const { error } = await supabaseClient
        .from('network_traffic_logs')
        .insert(packets)

      if (error) {
        console.error('Error inserting packets:', error)
        throw error
      }

      // Start periodic packet generation (every 2-5 seconds)
      setInterval(async () => {
        const newPacket = generateSimulatedPacket()
        console.log('Generated new packet:', newPacket)
        
        const { error: insertError } = await supabaseClient
          .from('network_traffic_logs')
          .insert([newPacket])

        if (insertError) {
          console.error('Error inserting new packet:', insertError)
        }
      }, Math.random() * 3000 + 2000)

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Simulation started successfully',
          initial_packets: packets 
        }),
        { 
          headers: { 
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        }
      )
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Invalid action specified' 
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 400 
      }
    )

  } catch (error) {
    console.error('Error in process-wireshark function:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 500 
      }
    )
  }
})