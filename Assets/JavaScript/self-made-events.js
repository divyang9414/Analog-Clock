setInterval(function () {
    let time = new Date(); //object of date()
    // hr.setTime(10800000);
    hr = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();
    
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    

    
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minut.style.transform = `rotate(${min_rotation}deg)`;

    // hour01.style.transform = `rotate(${hr_rotation}deg)`;
    // hour02.style.transform = `rotate(${hr_rotation}deg)`;
    // hour03.style.transform = `rotate(${hr_rotation}deg)`;
    // hour04.style.transform = `rotate(${hr_rotation}deg)`;
    // hour05.style.transform = `rotate(${hr_rotation}deg)`;
    // hour06.style.transform = `rotate(${hr_rotation}deg)`;
    // hour07.style.transform = `rotate(${hr_rotation}deg)`;
    // hour08.style.transform = `rotate(${hr_rotation}deg)`;
    // hour09.style.transform = `rotate(${hr_rotation}deg)`;
    // hour10.style.transform = `rotate(${hr_rotation}deg)`;
    // hour11.style.transform = `rotate(${hr_rotation}deg)`;
    // hour12.style.transform = `rotate(${hr_rotation}deg)`;
    // hsp01.style.rotate = `calc(-1 * ${hr_rotation-30}deg)`
    // hsp02.style.rotate = `calc(-1 * ${hr_rotation-60}deg)`
    // hsp03.style.rotate = `calc(-1 * ${hr_rotation-90}deg)`
    // hsp04.style.rotate = `calc(-1 * ${hr_rotation-120}deg)`
    // hsp05.style.rotate = `calc(-1 * ${hr_rotation-150}deg)`
    // hsp06.style.rotate = `calc(-1 * ${hr_rotation-180}deg)`
    // hsp07.style.rotate = `calc(-1 * ${hr_rotation-210}deg)`
    // hsp08.style.rotate = `calc(-1 * ${hr_rotation-240}deg)`
    // hsp09.style.rotate = `calc(-1 * ${hr_rotation-270}deg)`
    // hsp10.style.rotate = `calc(-1 * ${hr_rotation-300}deg)`
    // hsp11.style.rotate = `calc(-1 * ${hr_rotation-330}deg)`
    // hsp12.style.rotate = `calc(-1 * ${hr_rotation-360}deg)`

    
    second01.style.transform = `rotate(${sec_rotation}deg)`
    second02.style.transform = `rotate(${sec_rotation}deg)`
    second03.style.transform = `rotate(${sec_rotation}deg)`
    second04.style.transform = `rotate(${sec_rotation}deg)`
    second05.style.transform = `rotate(${sec_rotation}deg)`
    second06.style.transform = `rotate(${sec_rotation}deg)`
    second07.style.transform = `rotate(${sec_rotation}deg)`
    second08.style.transform = `rotate(${sec_rotation}deg)`
    second09.style.transform = `rotate(${sec_rotation}deg)`
    second10.style.transform = `rotate(${sec_rotation}deg)`
    second11.style.transform = `rotate(${sec_rotation}deg)`
    second12.style.transform = `rotate(${sec_rotation}deg)`
    second13.style.transform = `rotate(${sec_rotation}deg)`
    second14.style.transform = `rotate(${sec_rotation}deg)`
    second15.style.transform = `rotate(${sec_rotation}deg)`
    second16.style.transform = `rotate(${sec_rotation}deg)`
    second17.style.transform = `rotate(${sec_rotation}deg)`
    second18.style.transform = `rotate(${sec_rotation}deg)`
    second19.style.transform = `rotate(${sec_rotation}deg)`
    second20.style.transform = `rotate(${sec_rotation}deg)`
    second21.style.transform = `rotate(${sec_rotation}deg)`
    second22.style.transform = `rotate(${sec_rotation}deg)`
    second23.style.transform = `rotate(${sec_rotation}deg)`
    second24.style.transform = `rotate(${sec_rotation}deg)`
    second25.style.transform = `rotate(${sec_rotation}deg)`
    second26.style.transform = `rotate(${sec_rotation}deg)`
    second27.style.transform = `rotate(${sec_rotation}deg)`
    second28.style.transform = `rotate(${sec_rotation}deg)`
    second29.style.transform = `rotate(${sec_rotation}deg)`
    second30.style.transform = `rotate(${sec_rotation}deg)`
    second31.style.transform = `rotate(${sec_rotation}deg)`
    second32.style.transform = `rotate(${sec_rotation}deg)`
    second33.style.transform = `rotate(${sec_rotation}deg)`
    second34.style.transform = `rotate(${sec_rotation}deg)`
    second35.style.transform = `rotate(${sec_rotation}deg)`
    second36.style.transform = `rotate(${sec_rotation}deg)`
    second37.style.transform = `rotate(${sec_rotation}deg)`
    second38.style.transform = `rotate(${sec_rotation}deg)`
    second39.style.transform = `rotate(${sec_rotation}deg)`
    second40.style.transform = `rotate(${sec_rotation}deg)`
    second41.style.transform = `rotate(${sec_rotation}deg)`
    second42.style.transform = `rotate(${sec_rotation}deg)`
    second43.style.transform = `rotate(${sec_rotation}deg)`
    second44.style.transform = `rotate(${sec_rotation}deg)`
    second45.style.transform = `rotate(${sec_rotation}deg)`
    second46.style.transform = `rotate(${sec_rotation}deg)`
    second47.style.transform = `rotate(${sec_rotation}deg)`
    second48.style.transform = `rotate(${sec_rotation}deg)`
    second49.style.transform = `rotate(${sec_rotation}deg)`
    second50.style.transform = `rotate(${sec_rotation}deg)`
    second51.style.transform = `rotate(${sec_rotation}deg)`
    second52.style.transform = `rotate(${sec_rotation}deg)`
    second53.style.transform = `rotate(${sec_rotation}deg)`
    second54.style.transform = `rotate(${sec_rotation}deg)`
    second55.style.transform = `rotate(${sec_rotation}deg)`
    second56.style.transform = `rotate(${sec_rotation}deg)`
    second57.style.transform = `rotate(${sec_rotation}deg)`
    second58.style.transform = `rotate(${sec_rotation}deg)`
    second59.style.transform = `rotate(${sec_rotation}deg)`
    second00.style.transform = `rotate(${sec_rotation}deg)`

    ssp01.style.rotate = `calc(-1 * ${sec_rotation-6}deg)`
    ssp02.style.rotate = `calc(-1 * ${sec_rotation-12}deg)`
    ssp03.style.rotate = `calc(-1 * ${sec_rotation-18}deg)`
    ssp04.style.rotate = `calc(-1 * ${sec_rotation-24}deg)`
    ssp05.style.rotate = `calc(-1 * ${sec_rotation-30}deg)`
    ssp06.style.rotate = `calc(-1 * ${sec_rotation-36}deg)`
    ssp07.style.rotate = `calc(-1 * ${sec_rotation-42}deg)`
    ssp08.style.rotate = `calc(-1 * ${sec_rotation-48}deg)`
    ssp09.style.rotate = `calc(-1 * ${sec_rotation-54}deg)`
    ssp10.style.rotate = `calc(-1 * ${sec_rotation-60}deg)`
    ssp11.style.rotate = `calc(-1 * ${sec_rotation-66}deg)`
    ssp12.style.rotate = `calc(-1 * ${sec_rotation-72}deg)`
    ssp13.style.rotate = `calc(-1 * ${sec_rotation-78}deg)`
    ssp14.style.rotate = `calc(-1 * ${sec_rotation-84}deg)`
    ssp15.style.rotate = `calc(-1 * ${sec_rotation-90}deg)`
    ssp16.style.rotate = `calc(-1 * ${sec_rotation-96}deg)`
    ssp17.style.rotate = `calc(-1 * ${sec_rotation-102}deg)`
    ssp18.style.rotate = `calc(-1 * ${sec_rotation-108}deg)`
    ssp19.style.rotate = `calc(-1 * ${sec_rotation-114}deg)`
    ssp20.style.rotate = `calc(-1 * ${sec_rotation-120}deg)`
    ssp21.style.rotate = `calc(-1 * ${sec_rotation-126}deg)`
    ssp22.style.rotate = `calc(-1 * ${sec_rotation-132}deg)`
    ssp23.style.rotate = `calc(-1 * ${sec_rotation-138}deg)`
    ssp24.style.rotate = `calc(-1 * ${sec_rotation-144}deg)`
    ssp25.style.rotate = `calc(-1 * ${sec_rotation-150}deg)`
    ssp26.style.rotate = `calc(-1 * ${sec_rotation-156}deg)`
    ssp27.style.rotate = `calc(-1 * ${sec_rotation-162}deg)`
    ssp28.style.rotate = `calc(-1 * ${sec_rotation-168}deg)`
    ssp29.style.rotate = `calc(-1 * ${sec_rotation-174}deg)`
    ssp30.style.rotate = `calc(-1 * ${sec_rotation-180}deg)`
    ssp31.style.rotate = `calc(-1 * ${sec_rotation-186}deg)`
    ssp32.style.rotate = `calc(-1 * ${sec_rotation-192}deg)`
    ssp33.style.rotate = `calc(-1 * ${sec_rotation-198}deg)`
    ssp34.style.rotate = `calc(-1 * ${sec_rotation-204}deg)`
    ssp35.style.rotate = `calc(-1 * ${sec_rotation-210}deg)`
    ssp36.style.rotate = `calc(-1 * ${sec_rotation-216}deg)`
    ssp37.style.rotate = `calc(-1 * ${sec_rotation-222}deg)`
    ssp38.style.rotate = `calc(-1 * ${sec_rotation-228}deg)`
    ssp39.style.rotate = `calc(-1 * ${sec_rotation-234}deg)`
    ssp40.style.rotate = `calc(-1 * ${sec_rotation-240}deg)`
    ssp41.style.rotate = `calc(-1 * ${sec_rotation-246}deg)`
    ssp42.style.rotate = `calc(-1 * ${sec_rotation-252}deg)`
    ssp43.style.rotate = `calc(-1 * ${sec_rotation-258}deg)`
    ssp44.style.rotate = `calc(-1 * ${sec_rotation-264}deg)`
    ssp45.style.rotate = `calc(-1 * ${sec_rotation-270}deg)`
    ssp46.style.rotate = `calc(-1 * ${sec_rotation-276}deg)`
    ssp47.style.rotate = `calc(-1 * ${sec_rotation-282}deg)`
    ssp48.style.rotate = `calc(-1 * ${sec_rotation-288}deg)`
    ssp49.style.rotate = `calc(-1 * ${sec_rotation-294}deg)`
    ssp50.style.rotate = `calc(-1 * ${sec_rotation-300}deg)`
    ssp51.style.rotate = `calc(-1 * ${sec_rotation-306}deg)`
    ssp52.style.rotate = `calc(-1 * ${sec_rotation-312}deg)`
    ssp53.style.rotate = `calc(-1 * ${sec_rotation-318}deg)`
    ssp54.style.rotate = `calc(-1 * ${sec_rotation-324}deg)`
    ssp55.style.rotate = `calc(-1 * ${sec_rotation-330}deg)`
    ssp56.style.rotate = `calc(-1 * ${sec_rotation-336}deg)`
    ssp57.style.rotate = `calc(-1 * ${sec_rotation-342}deg)`
    ssp58.style.rotate = `calc(-1 * ${sec_rotation-348}deg)`
    ssp59.style.rotate = `calc(-1 * ${sec_rotation-354}deg)`
    ssp00.style.rotate = `calc(-1 * ${sec_rotation-360}deg)`
}, 1000);

// function secd(id){
//     document.getElementById(id).classList.add(rotate)
// }