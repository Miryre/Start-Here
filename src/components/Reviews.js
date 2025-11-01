import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Martinez",
      school: "UCLA",
      year: "Junior",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      review: "StartHere helped me find emergency housing assistance when I needed it most. The resources are actually current and relevant to students like me.",
    },
    {
      id: 2,
      name: "James Chen",
      school: "UC Berkeley",
      year: "Sophomore",
      avatar: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      review: "I found a paid internship through the career resources section! The resume tips and interview prep were game-changers.",
    },
    {
      id: 3,
      name: "Maya Patel",
      school: "Stanford",
      year: "Senior",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      review: "The food pantry directory saved me so much money. I didn't know these resources existed until I found StartHere.",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      school: "USC",
      year: "Freshman",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      review: "As a first-gen student, navigating college was overwhelming. StartHere made finding tutoring and academic support so much easier.",
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      school: "UCSD",
      year: "Junior",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      review: "The community forum connected me with other students facing similar challenges. It's nice to know I'm not alone.",
    },
    {
      id: 6,
      name: "David Kim",
      school: "UCI",
      year: "Sophomore",
      avatar: "https://i.pravatar.cc/150?img=14",
      rating: 5,
      review: "Found affordable textbooks and free study groups through StartHere. My GPA went up and my stress went down!",
    },
  ];

  return (
    <section className='reviews-section'>
      <div className='reviews-container'>
        
        {/* Section Header */}
        <div className='reviews-header'>
          <h2>Student Stories</h2>
          <p>See how StartHere is helping students navigate college life</p>
        </div>

        {/* Testimonials Grid */}
        <div className='testimonials-grid'>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='testimonial-card'>
              
              {/* Star Rating */}
              <div className='rating'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className='star'>⭐</span>
                ))}
              </div>

              {/* Review Text */}
              <p className='review-text'>"{testimonial.review}"</p>

              {/* Student Info */}
              <div className='student-info'>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className='student-avatar'
                />
                <div className='student-details'>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.school} • {testimonial.year}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='reviews-cta'>
          <h3>Have your own story to share?</h3>
          <button className='btn-share-story'>Share Your Experience</button>
        </div>

      </div>
    </section>
  );
};

export default Reviews;