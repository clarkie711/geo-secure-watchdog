export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      active_connections: {
        Row: {
          count: number
          id: number
          updated_at: string | null
        }
        Insert: {
          count?: number
          id?: number
          updated_at?: string | null
        }
        Update: {
          count?: number
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      alerts: {
        Row: {
          id: number
          severity: string
          source: string
          timestamp: string | null
          type: string
        }
        Insert: {
          id?: number
          severity: string
          source: string
          timestamp?: string | null
          type: string
        }
        Update: {
          id?: number
          severity?: string
          source?: string
          timestamp?: string | null
          type?: string
        }
        Relationships: []
      }
      blocked_ips: {
        Row: {
          blocked_at: string | null
          id: number
          ip_address: string
          reason: string | null
        }
        Insert: {
          blocked_at?: string | null
          id?: number
          ip_address: string
          reason?: string | null
        }
        Update: {
          blocked_at?: string | null
          id?: number
          ip_address?: string
          reason?: string | null
        }
        Relationships: []
      }
      network_logs: {
        Row: {
          destination_ip: string | null
          event_type: string
          id: number
          message: string
          metadata: Json | null
          port: number | null
          protocol: string | null
          source_ip: string | null
          status: string
          timestamp: string | null
        }
        Insert: {
          destination_ip?: string | null
          event_type: string
          id?: number
          message: string
          metadata?: Json | null
          port?: number | null
          protocol?: string | null
          source_ip?: string | null
          status: string
          timestamp?: string | null
        }
        Update: {
          destination_ip?: string | null
          event_type?: string
          id?: number
          message?: string
          metadata?: Json | null
          port?: number | null
          protocol?: string | null
          source_ip?: string | null
          status?: string
          timestamp?: string | null
        }
        Relationships: []
      }
      network_threats: {
        Row: {
          confidence_score: number
          details: Json | null
          detected_at: string | null
          id: number
          is_false_positive: boolean | null
          location: Json | null
          source_ip: string
          threat_type: string
        }
        Insert: {
          confidence_score: number
          details?: Json | null
          detected_at?: string | null
          id?: number
          is_false_positive?: boolean | null
          location?: Json | null
          source_ip: string
          threat_type: string
        }
        Update: {
          confidence_score?: number
          details?: Json | null
          detected_at?: string | null
          id?: number
          is_false_positive?: boolean | null
          location?: Json | null
          source_ip?: string
          threat_type?: string
        }
        Relationships: []
      }
      network_traffic_logs: {
        Row: {
          created_at: string | null
          destination_address: string
          id: number
          info: string | null
          length: number
          protocol: string
          source_address: string
          timestamp: string | null
        }
        Insert: {
          created_at?: string | null
          destination_address: string
          id?: number
          info?: string | null
          length: number
          protocol: string
          source_address: string
          timestamp?: string | null
        }
        Update: {
          created_at?: string | null
          destination_address?: string
          id?: number
          info?: string | null
          length?: number
          protocol?: string
          source_address?: string
          timestamp?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          username: string
        }
        Insert: {
          created_at?: string
          full_name: string
          id: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          username: string
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      snort_alerts: {
        Row: {
          classification: string | null
          destination_ip: string
          destination_port: number | null
          false_positive: boolean | null
          id: number
          notes: string | null
          packet_details: Json | null
          payload: string | null
          priority: number | null
          processed: boolean | null
          protocol: string | null
          raw_log: string | null
          severity: Database["public"]["Enums"]["snort_alert_severity"]
          signature_id: number
          signature_name: string
          source_ip: string
          source_port: number | null
          timestamp: string | null
        }
        Insert: {
          classification?: string | null
          destination_ip: string
          destination_port?: number | null
          false_positive?: boolean | null
          id?: number
          notes?: string | null
          packet_details?: Json | null
          payload?: string | null
          priority?: number | null
          processed?: boolean | null
          protocol?: string | null
          raw_log?: string | null
          severity: Database["public"]["Enums"]["snort_alert_severity"]
          signature_id: number
          signature_name: string
          source_ip: string
          source_port?: number | null
          timestamp?: string | null
        }
        Update: {
          classification?: string | null
          destination_ip?: string
          destination_port?: number | null
          false_positive?: boolean | null
          id?: number
          notes?: string | null
          packet_details?: Json | null
          payload?: string | null
          priority?: number | null
          processed?: boolean | null
          protocol?: string | null
          raw_log?: string | null
          severity?: Database["public"]["Enums"]["snort_alert_severity"]
          signature_id?: number
          signature_name?: string
          source_ip?: string
          source_port?: number | null
          timestamp?: string | null
        }
        Relationships: []
      }
      traffic_analysis: {
        Row: {
          created_at: string | null
          details: Json | null
          id: number
          pattern: string
          severity: string
          timestamp: string | null
        }
        Insert: {
          created_at?: string | null
          details?: Json | null
          id?: number
          pattern: string
          severity: string
          timestamp?: string | null
        }
        Update: {
          created_at?: string | null
          details?: Json | null
          id?: number
          pattern?: string
          severity?: string
          timestamp?: string | null
        }
        Relationships: []
      }
      traffic_data: {
        Row: {
          id: number
          packets: number
          time: string | null
        }
        Insert: {
          id?: number
          packets?: number
          time?: string | null
        }
        Update: {
          id?: number
          packets?: number
          time?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_new_user: {
        Args: {
          email: string
          password: string
          full_name: string
          username: string
          role?: Database["public"]["Enums"]["user_role"]
        }
        Returns: string
      }
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      snort_alert_severity: "low" | "medium" | "high" | "critical"
      user_role: "admin" | "manager" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
