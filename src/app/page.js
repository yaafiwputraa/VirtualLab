import HeroSection from '@/components/HeroSection';
import CourseSection from '@/components/CourseSection';
import DiscussionSection from '@/components/DiscussionSection';

export default function HomePage() {
  return (
    <div className="bg-black">
      
      <HeroSection />

      {/* Tambahkan id="courses" di Course Section */}
      <section id="courses">
        <CourseSection />
      </section>

      {/* Tambahkan id="about" di Discussion Section */}
      <section id="about">
        <DiscussionSection />
      </section>

      {/* Tidak perlu menambahkan Footer lagi di sini */}
    </div>
  );
}
