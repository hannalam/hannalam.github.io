import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' alt='About' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I am Hanna Lam, a computer science graduate with a passion for web development. I have extensive experience in HTML, CSS, JavaScript, and React. Besides my technical expertise, I am also a certified yoga instructor with over 5 years of experience in teaching yoga. I love helping people find balance and tranquility through yoga.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
