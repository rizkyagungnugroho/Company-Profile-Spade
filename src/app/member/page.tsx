// app/member/page.tsx
import MemberForm from "@/components/MemberForm";

export default function MemberPage() {
  return (
    <div className="min-h-screen py-10 px-4 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">Pendaftaran Member</h1>
      <MemberForm />
    </div>
  );
}
