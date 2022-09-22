import Seo from '@/components/Seo'

const AboutPage = () => (
  <>
    <Seo templateTitle='About' />
    <div className='py-8'>
      <div className='text-xl font-bold'>About</div>
      <p>
        Founded in 2014 when Rick recognized the need for a fun place for people
        to learn to dance. Rick had been dancing for over 12 years, at the time,
        and he wanted to share with others the benefits of dance. Besides the
        obvious physical health benefits, it has been proven that dance can
        improve ones mental accuity.
      </p>
    </div>
    <div className='py-8'>
      <div className='text-xl font-bold'>Philosophy</div>
      <p>
        Many people believe that they can not learn to dance because they have
        “two left feet”. The truth is if you can hear the beat, you can learn to
        dance and we can teach you.
      </p>
    </div>
  </>
)

export default AboutPage
