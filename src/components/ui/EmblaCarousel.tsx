import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from './button';
import { Slider } from './slider';

type SlideType = {
  id: number;
  image: string;
  description: string;
  donations: string;
};

type PropType = {
  slides: SlideType[]; // Array of SlideType objects
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

//   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className=" embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="relative flex-col space-y-2 embla__slide__content" >
                <img  src={slide.image} alt={`Slide ${slide.id}`} className="object-fill embla__slide__image" />
                <div className="flex-col items-center content-center space-y-2 embla__slide__text">
                  <p className="embla__slide__description">{slide.description}</p>
                  <div className='flex justify-around'>
                  <p className="embla__slide__donations">
                    {slide.donations} 
                 </p>
                 <p><span className='text-gray-400'>$10,400</span></p>
                  </div>
                 
                 <Slider defaultValue={[51]} max={100} step={1} disabled
                      style={{ marginTop: '10px', width: '100%'}} />
                 
                </div>
                <Button className="embla__slide__donations">Donate Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end ">
        <div className="flex ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="space-x-2 embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default EmblaCarousel;
