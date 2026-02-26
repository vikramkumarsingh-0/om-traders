export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Redirecting to Dashboard...</h1>
        <p className="text-primary-600">Please wait</p>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `window.location.href='/admin/dashboard'` }} />
    </div>
  );
}