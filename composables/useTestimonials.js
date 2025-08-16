import { ref } from 'vue';

export default function useTestimonials() {
  const testimonials = ref([
    {
      name: 'Dr. A. Rodriguez',
      title: 'Internal Medicine',
      quote: 'Welkesa cut my documentation time in half and helped me focus more on patients. The notes are more thorough than what I had time to write myself.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Dr. S. Patel',
      title: 'Family Practice',
      quote: 'The combination of AI and physician scribes is revolutionary. Notes are accurate, contextual, and ready for my review in hours, not days.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Dr. L. Chen',
      title: 'Endocrinology',
      quote: 'As a solo practitioner, Welkesa has been game-changing. I get back 2-3 hours per day while maintaining excellent documentation quality.',
      rating: 4,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ]);

  return { testimonials };
}