import { Routes } from '@angular/router';

export const routes: Routes = [
    // Route mặc định khi vào trang web (chuyển hướng đến /landing)
    {
        path: '',
        loadComponent: () => import('./features/landing/landing').then(m => m.Landing)
    },

    // Route Đăng nhập / Đăng ký
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent)
    },

    // Route Trang chủ / Chọn khóa học
    {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
    },

    // Route Chi tiết khóa học (cần truyền thêm ID khóa học trên URL, ví dụ: /course/tieng-trung)
    {
        path: 'course/:id',
        loadComponent: () => import('./features/course/course-detail/course-detail').then(m => m.CourseDetailComponent)
    },

    // Route Học tập (cần truyền ID bài học, ví dụ: /lesson/bai-1)
    {
        path: 'lesson/:id',
        loadComponent: () => import('./features/lesson/lesson').then(m => m.Lesson)
    },

    // Route Giới thiệu giáo viên (Cô Nghiêm Linh)
    {
        path: 'teacher-intro',
        loadComponent: () => import('./features/teacher-intro/teacher-intro').then(m => m.TeacherIntroComponent)
    },

    // Route Quản trị (Admin - Bảo vệ bằng AdminGuard)
    {
        path: 'admin',
        canActivate: [() => import('./core/guards/admin.guard').then(m => m.adminGuard)],
        loadComponent: () => import('./features/admin/admin').then(m => m.AdminComponent)
    },

    // Route 404 (Khi nhập sai URL sẽ chuyển về login hoặc trang 404 tùy bạn)
    { path: '**', redirectTo: 'dashboard' }
];
