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
      anonymous_activity: {
        Row: {
          event_type: string | null
          id: string
          metadata: Json | null
          occurred_at: string | null
          session_id: string
        }
        Insert: {
          event_type?: string | null
          id?: string
          metadata?: Json | null
          occurred_at?: string | null
          session_id: string
        }
        Update: {
          event_type?: string | null
          id?: string
          metadata?: Json | null
          occurred_at?: string | null
          session_id?: string
        }
        Relationships: []
      }
      artist_about: {
        Row: {
          artist_id: string
          content: string | null
          updated_at: string | null
        }
        Insert: {
          artist_id: string
          content?: string | null
          updated_at?: string | null
        }
        Update: {
          artist_id?: string
          content?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_about_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: true
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_color_links: {
        Row: {
          artist_id: string
          color_id: string
        }
        Insert: {
          artist_id: string
          color_id: string
        }
        Update: {
          artist_id?: string
          color_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "artist_color_links_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_color_links_color_id_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "tattoo_colors"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_healing_guides: {
        Row: {
          artist_id: string
          content: string | null
          updated_at: string | null
        }
        Insert: {
          artist_id: string
          content?: string | null
          updated_at?: string | null
        }
        Update: {
          artist_id?: string
          content?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_healing_guides_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: true
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_mobility: {
        Row: {
          artist_id: string
          created_at: string | null
          guest_end_date: string | null
          guest_start_date: string | null
          resident_studio_id: string | null
          upcoming_guest_studio_id: string | null
          updated_at: string | null
        }
        Insert: {
          artist_id: string
          created_at?: string | null
          guest_end_date?: string | null
          guest_start_date?: string | null
          resident_studio_id?: string | null
          upcoming_guest_studio_id?: string | null
          updated_at?: string | null
        }
        Update: {
          artist_id?: string
          created_at?: string | null
          guest_end_date?: string | null
          guest_start_date?: string | null
          resident_studio_id?: string | null
          upcoming_guest_studio_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_mobility_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: true
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_mobility_resident_studio_id_fkey"
            columns: ["resident_studio_id"]
            isOneToOne: false
            referencedRelation: "studios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_mobility_upcoming_guest_studio_id_fkey"
            columns: ["upcoming_guest_studio_id"]
            isOneToOne: false
            referencedRelation: "studios"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_page_settings: {
        Row: {
          artist_id: string
          banner_url: string | null
          color_theme: string | null
          created_at: string | null
          custom_domain: string | null
          updated_at: string | null
        }
        Insert: {
          artist_id: string
          banner_url?: string | null
          color_theme?: string | null
          created_at?: string | null
          custom_domain?: string | null
          updated_at?: string | null
        }
        Update: {
          artist_id?: string
          banner_url?: string | null
          color_theme?: string | null
          created_at?: string | null
          custom_domain?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_page_settings_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: true
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_portfolio: {
        Row: {
          artist_id: string | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          title: string | null
        }
        Insert: {
          artist_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          title?: string | null
        }
        Update: {
          artist_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_portfolio_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_settings: {
        Row: {
          artist_id: string
          consultation_price: number | null
          created_at: string | null
          design_price: number | null
          session_price: number | null
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          artist_id: string
          consultation_price?: number | null
          created_at?: string | null
          design_price?: number | null
          session_price?: number | null
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          artist_id?: string
          consultation_price?: number | null
          created_at?: string | null
          design_price?: number | null
          session_price?: number | null
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_settings_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: true
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_studio_links: {
        Row: {
          artist_id: string
          from_date: string | null
          role: string | null
          studio_id: string
          to_date: string | null
        }
        Insert: {
          artist_id: string
          from_date?: string | null
          role?: string | null
          studio_id: string
          to_date?: string | null
        }
        Update: {
          artist_id?: string
          from_date?: string | null
          role?: string | null
          studio_id?: string
          to_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_studio_links_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_studio_links_studio_id_fkey"
            columns: ["studio_id"]
            isOneToOne: false
            referencedRelation: "studios"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_style_links: {
        Row: {
          artist_id: string
          style_id: string
        }
        Insert: {
          artist_id: string
          style_id: string
        }
        Update: {
          artist_id?: string
          style_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "artist_style_links_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_style_links_style_id_fkey"
            columns: ["style_id"]
            isOneToOne: false
            referencedRelation: "tattoo_styles"
            referencedColumns: ["id"]
          },
        ]
      }
      artists: {
        Row: {
          artist_username: string
          bio: string | null
          city: string | null
          created_at: string | null
          display_name: string | null
          id: string
          instagram: string | null
          styles: string[] | null
          telegram_username: string | null
          updated_at: string | null
        }
        Insert: {
          artist_username: string
          bio?: string | null
          city?: string | null
          created_at?: string | null
          display_name?: string | null
          id: string
          instagram?: string | null
          styles?: string[] | null
          telegram_username?: string | null
          updated_at?: string | null
        }
        Update: {
          artist_username?: string
          bio?: string | null
          city?: string | null
          created_at?: string | null
          display_name?: string | null
          id?: string
          instagram?: string | null
          styles?: string[] | null
          telegram_username?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artists_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          client_contact: string | null
          client_name: string | null
          created_at: string | null
          id: string
          slot_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          client_contact?: string | null
          client_name?: string | null
          created_at?: string | null
          id?: string
          slot_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          client_contact?: string | null
          client_name?: string | null
          created_at?: string | null
          id?: string
          slot_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_slot_id_fkey"
            columns: ["slot_id"]
            isOneToOne: false
            referencedRelation: "slots"
            referencedColumns: ["id"]
          },
        ]
      }
      interface_labels: {
        Row: {
          key: string
          name_en: string
          name_ru: string
        }
        Insert: {
          key: string
          name_en: string
          name_ru: string
        }
        Update: {
          key?: string
          name_en?: string
          name_ru?: string
        }
        Relationships: []
      }
      oauth_tokens: {
        Row: {
          access_token: string | null
          artist_id: string
          created_at: string | null
          expires_at: string | null
          refresh_token: string | null
          updated_at: string | null
        }
        Insert: {
          access_token?: string | null
          artist_id: string
          created_at?: string | null
          expires_at?: string | null
          refresh_token?: string | null
          updated_at?: string | null
        }
        Update: {
          access_token?: string | null
          artist_id?: string
          created_at?: string | null
          expires_at?: string | null
          refresh_token?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "oauth_tokens_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: true
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
        ]
      }
      slots: {
        Row: {
          artist_id: string | null
          created_at: string | null
          end_time: string
          id: string
          is_booked: boolean | null
          start_time: string
          studio_id: string | null
        }
        Insert: {
          artist_id?: string | null
          created_at?: string | null
          end_time: string
          id?: string
          is_booked?: boolean | null
          start_time: string
          studio_id?: string | null
        }
        Update: {
          artist_id?: string | null
          created_at?: string | null
          end_time?: string
          id?: string
          is_booked?: boolean | null
          start_time?: string
          studio_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "slots_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "slots_studio_id_fkey"
            columns: ["studio_id"]
            isOneToOne: false
            referencedRelation: "studios"
            referencedColumns: ["id"]
          },
        ]
      }
      studios: {
        Row: {
          address: string | null
          city: string | null
          contact_email: string | null
          created_at: string | null
          description: string | null
          id: string
          instagram: string | null
          name: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          contact_email?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          instagram?: string | null
          name: string
        }
        Update: {
          address?: string | null
          city?: string | null
          contact_email?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          instagram?: string | null
          name?: string
        }
        Relationships: []
      }
      tattoo_colors: {
        Row: {
          code: string
          created_at: string | null
          id: string
          name_en: string
          name_ru: string
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: string
          name_en: string
          name_ru: string
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: string
          name_en?: string
          name_ru?: string
        }
        Relationships: []
      }
      tattoo_styles: {
        Row: {
          code: string
          created_at: string | null
          id: string
          name_en: string
          name_ru: string
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: string
          name_en: string
          name_ru: string
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: string
          name_en?: string
          name_ru?: string
        }
        Relationships: []
      }
      user_activity: {
        Row: {
          event_type: string | null
          id: string
          metadata: Json | null
          occurred_at: string | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          event_type?: string | null
          id?: string
          metadata?: Json | null
          occurred_at?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          event_type?: string | null
          id?: string
          metadata?: Json | null
          occurred_at?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_activity_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          google_id: string | null
          id: string
          last_active_at: string | null
          name: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          google_id?: string | null
          id?: string
          last_active_at?: string | null
          name?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          google_id?: string | null
          id?: string
          last_active_at?: string | null
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
