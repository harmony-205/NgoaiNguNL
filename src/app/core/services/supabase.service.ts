import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { StudentRecord } from './student-management.service';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.anonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true
        }
      }
    );
  }

  get client(): SupabaseClient {
    return this.supabase;
  }

  // --- Map database row (snake_case) to StudentRecord (camelCase) ---
  private toStudentRecord(row: any): StudentRecord {
    return {
      id: row.id,
      fullName: row.full_name || '',
      email: row.email || '',
      course: row.course || 'Tiếng Trung',
      isInternal: !!row.is_internal,
      classTeacherZalo: row.class_teacher_zalo || '',
      registeredDate: row.registered_date || new Date().toISOString().split('T')[0],
      hskAdvanceApproved: !!row.hsk_advance_approved,
      status: row.status || 'active',
      avatarUrl: row.avatar_url || '',
      password: row.password || 'Password123',
      isGoogleAuth: !!row.is_google_auth,
      authProvider: row.auth_provider || (row.is_google_auth ? 'google' : 'password'),
      isDeleted: !!row.is_deleted,
      deletedAt: row.deleted_at || undefined
    };
  }

  // --- Map StudentRecord (camelCase) to database row (snake_case) ---
  private toDbRow(student: StudentRecord): any {
    return {
      id: student.id,
      full_name: student.fullName,
      email: student.email.trim().toLowerCase(),
      course: student.course,
      is_internal: !!student.isInternal,
      class_teacher_zalo: student.classTeacherZalo || null,
      registered_date: student.registeredDate || new Date().toISOString().split('T')[0],
      hsk_advance_approved: !!student.hskAdvanceApproved,
      status: student.status,
      avatar_url: student.avatarUrl || null,
      password: student.password || null,
      is_google_auth: !!student.isGoogleAuth,
      auth_provider: student.authProvider || (student.isGoogleAuth ? 'google' : 'password'),
      is_deleted: !!student.isDeleted,
      deleted_at: student.deletedAt || null
    };
  }

  /**
   * Fetch all students from Supabase
   */
  async fetchStudents(): Promise<StudentRecord[] | null> {
    try {
      const { data, error } = await this.supabase
        .from('students')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('[Supabase] Lỗi khi tải danh sách học viên:', error.message);
        return null;
      }

      return (data || []).map(row => this.toStudentRecord(row));
    } catch (err: any) {
      console.warn('[Supabase] Lỗi kết nối:', err?.message || err);
      return null;
    }
  }

  /**
   * Upsert (Insert or Update) a student in Supabase
   */
  async upsertStudent(student: StudentRecord): Promise<boolean> {
    try {
      const row = this.toDbRow(student);
      const { error } = await this.supabase
        .from('students')
        .upsert(row, { onConflict: 'email' });

      if (error) {
        console.error('[Supabase] Lỗi khi lưu học viên:', error.message);
        return false;
      }
      return true;
    } catch (err: any) {
      console.error('[Supabase] Ngoại lệ khi lưu học viên:', err?.message || err);
      return false;
    }
  }

  /**
   * Update student fields in Supabase by ID
   */
  async updateStudent(id: string, updates: Partial<StudentRecord>): Promise<boolean> {
    try {
      const dbUpdates: any = {};
      if (updates.fullName !== undefined) dbUpdates.full_name = updates.fullName;
      if (updates.course !== undefined) dbUpdates.course = updates.course;
      if (updates.isInternal !== undefined) dbUpdates.is_internal = updates.isInternal;
      if (updates.classTeacherZalo !== undefined) dbUpdates.class_teacher_zalo = updates.classTeacherZalo;
      if (updates.hskAdvanceApproved !== undefined) dbUpdates.hsk_advance_approved = updates.hskAdvanceApproved;
      if (updates.status !== undefined) dbUpdates.status = updates.status;
      if (updates.password !== undefined) dbUpdates.password = updates.password;
      if (updates.isDeleted !== undefined) {
        dbUpdates.is_deleted = updates.isDeleted;
        dbUpdates.deleted_at = updates.isDeleted ? new Date().toISOString() : null;
      }

      const { error } = await this.supabase
        .from('students')
        .update(dbUpdates)
        .eq('id', id);

      if (error) {
        console.error(`[Supabase] Lỗi cập nhật học viên ${id}:`, error.message);
        return false;
      }
      return true;
    } catch (err: any) {
      console.error(`[Supabase] Ngoại lệ cập nhật học viên ${id}:`, err?.message || err);
      return false;
    }
  }

  /**
   * Permanently delete a student by ID
   */
  async deleteStudentPermanently(id: string): Promise<boolean> {
    try {
      const { error } = await this.supabase
        .from('students')
        .delete()
        .eq('id', id);

      if (error) {
        console.error(`[Supabase] Lỗi xóa vĩnh viễn học viên ${id}:`, error.message);
        return false;
      }
      return true;
    } catch (err: any) {
      console.error(`[Supabase] Ngoại lệ xóa học viên ${id}:`, err?.message || err);
      return false;
    }
  }
}

