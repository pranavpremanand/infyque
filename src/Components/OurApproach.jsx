import ourApproach from "../assets/images/ourapproach.webp";

const OurApproach = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid lg:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] text-primary font-bold"
          >
            Our Approach
          </h3>
          <p className="desc mt-4 space-y-4" data-aos="fade-right">
            At INFYQUE, we follow a simple yet effective process that ensures
            your project is completed on time, within budget, and to the highest
            quality standards. Our approach is rooted in collaboration,
            transparency, and clear communication, making the development
            journey smooth and efficient.
            <br />
            <br />
            <strong>1. Discovery & Planning:</strong>
            <br />
            We begin by thoroughly understanding your business. Through detailed
            consultations and research, we align on clear goals and objectives,
            ensuring that our efforts are directed towards your vision for a
            successful project outcome.
            <br />
            <br />
            <strong>2. Design & Prototyping:</strong>
            <br />
            With a solid strategy in place, our design team crafts wireframes
            and prototypes to visually represent the product. This phase is key
            for gathering early feedback, allowing for revisions that ensure the
            design meets your expectations before development begins.
            <br />
            <br />
            <strong>3. Development:</strong>
            <br />
            Our developers bring the project to life, using the latest tools and
            technologies to build a secure, scalable, and high-performing
            solution. We prioritize both quality and functionality throughout
            the process, ensuring that the solution not only meets but exceeds
            your expectations.
            <br />
            <br />
            <strong>4. Testing & Quality Assurance:</strong>
            <br />
            Before launching, we rigorously test the solution to ensure it
            performs as expected. Our QA process covers all aspects, including
            usability, security, functionality, and performance, guaranteeing a
            flawless user experience.
            <br />
            <br />
            <strong>5. Launch & Ongoing Support:</strong>
            <br />
            Once the project is ready, we guide you through the launch process
            and provide ongoing support to ensure optimal performance. We're
            committed to your long-term success, offering maintenance and
            updates to keep your solution current and effective.
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="h-full object-cover"
          src={ourApproach}
          alt="Our Approach"
        />
      </div>
    </section>
  );
};

export default OurApproach;
