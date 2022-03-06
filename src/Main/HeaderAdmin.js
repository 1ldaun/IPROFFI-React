import React from 'react'
import logoSrc from '../img/Logo_iP.svg';
import {NavLink, Route, BrowserRouter} from 'react-router-dom';
import toggleMenu from '../img/toggle-menu.png';
import closeMenu from '../img/closeMobileMenu.png';
import adminImg from '../img/admin.svg';
import adminActiveImg from '../img/admin-active.svg';
import myCourse from '../img/myTask.png';
import myCourseActive from '../img/myTask-active.png';
import logoutImg from '../img/logout.png';
import profileImg from '../img/profile2x.png';
import {useState} from 'react';
import cookie from 'js-cookie'

export default function HeaderAdmin(props) {
  const profile =
    {img_profile:props.userInfo.profile_pic_url, name_profile:props.userInfo.name, city_profile:props.userInfo.city};
    const [mobileActive, setMobileActive] = useState(false);

    function logout() {
      cookie.set('hash', null);
      cookie.set('token', null);
      window.location.href = '/login';
    }

  function role(){
    if (props.userInfo.role == "ADMIN")
      return <NavLink to="/admin_page/stats" className="header-menu-li header-menu-a" activeClassName="header-menu-li-active">Администрация</NavLink>
    else
      return <NavLink to="/teacher_page" className="header-menu-a header-menu-li" activeClassName="header-menu-li-active">Учительская</NavLink>
  }

  function role_mobile(){
    if (props.userInfo.role == "ADMIN")
      return <li className="header-menu-li"><NavLink to="/admin_page/stats" className="header-menu-a"><img src={adminImg} alt="" className="myCatalog" /><img src={adminActiveImg} alt="" className="myCatalog-active" />Администрация</NavLink></li>
    else
      return <li className="header-menu-li"><NavLink to="/teacher_page" className="header-menu-a"><img src={adminImg} alt="" className="myCourse" /><img src={adminActiveImg} alt="" className="myCourse-active" />Учительская</NavLink></li>
  }
    return (
      <div className="header">
      <NavLink to={props.userInfo.role == "ADMIN" ? "/admin_page" : "/teacher_page"} className="header-logo"><img src={logoSrc} alt="" className="header-logo" /></NavLink>
      <img src={toggleMenu} alt="" className="header-toggle-menu" onClick={() => setMobileActive(true)}/>
        <div className={mobileActive ? "mask-header-mobile-menu active" : "mask-header-mobile-menu"}>
          <ul className="header-mobile-menu">
            <NavLink to="/edit_profile" className="header-mobile-profile">
            <div style={{position: "relative"}}>
              <img src={profileImg} alt="" className="header-profile-img" />
              <svg className="edit-profile-mobile" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                <g id="Сгруппировать_3185" data-name="Сгруппировать 3185" transform="translate(-136 -112)">
                  <circle id="Эллипс_411" data-name="Эллипс 411" cx="13" cy="13" r="13" transform="translate(136 112)" fill="#fff"/>
                  <g id="Сгруппировать_3185-2" data-name="Сгруппировать 3185" transform="translate(125 -235)">
                    <g id="Объединение_1" data-name="Объединение 1" transform="translate(-1904 350)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1926,20V17.748a7.954,7.954,0,0,1-2.184-.928l-1.621,1.565-2.778-2.877,1.62-1.565a7.955,7.955,0,0,1-.786-1.944H1918V8h2.252a7.956,7.956,0,0,1,.928-2.184L1919.615,4.2l2.877-2.778,1.565,1.62A7.953,7.953,0,0,1,1926,2.252V0h4V2.252a7.955,7.955,0,0,1,2.184.928l1.621-1.565,2.779,2.877-1.621,1.565A7.951,7.951,0,0,1,1935.748,8H1938v4h-2.252a7.952,7.952,0,0,1-.928,2.184l1.565,1.621-2.877,2.778-1.565-1.62a7.952,7.952,0,0,1-1.944.786V20Z" stroke="none"/>
                      <path d="M 1928.999633789062 18.99979972839355 L 1928.999633789062 17.74798011779785 C 1928.999633789062 17.29170036315918 1929.308471679688 16.89328002929688 1929.750366210938 16.77955055236816 C 1930.34375 16.62682914733887 1930.915405273438 16.39564895629883 1931.449584960938 16.09242057800293 C 1931.846435546875 15.86707305908203 1932.345458984375 15.939208984375 1932.66259765625 16.26744079589844 L 1933.532592773438 17.16832733154297 L 1934.971069335938 15.77929401397705 L 1934.100708007812 14.87806987762451 C 1933.78369140625 14.54976940155029 1933.729125976562 14.04843997955322 1933.968139648438 13.65964031219482 C 1934.333374023438 13.06575965881348 1934.606323242188 12.42341995239258 1934.779541015625 11.75047016143799 C 1934.893188476562 11.30856990814209 1935.291625976562 10.99969959259033 1935.747924804688 10.99969959259033 L 1936.999755859375 10.99969959259033 L 1936.999755859375 9.000100135803223 L 1935.747924804688 9.000100135803223 C 1935.291625976562 9.000100135803223 1934.893188476562 8.691240310668945 1934.779541015625 8.249360084533691 C 1934.626831054688 7.656270027160645 1934.395751953125 7.084749698638916 1934.092651367188 6.550679683685303 C 1933.867309570312 6.153779983520508 1933.939331054688 5.654719829559326 1934.267578125 5.337699890136719 L 1935.169067382812 4.467278003692627 L 1933.779296875 3.02852988243103 L 1932.878051757812 3.898959875106812 C 1932.549682617188 4.216080188751221 1932.048583984375 4.270455360412598 1931.65966796875 4.031519889831543 C 1931.065795898438 3.666459798812866 1930.423461914062 3.393509864807129 1929.750366210938 3.220239877700806 C 1929.308471679688 3.106489896774292 1928.999633789062 2.708079814910889 1928.999633789062 2.25180983543396 L 1928.999633789062 0.9999998807907104 L 1927 0.9999998807907104 L 1927 2.25180983543396 C 1927 2.708069801330566 1926.691162109375 3.10647988319397 1926.249267578125 3.220229864120483 C 1925.656005859375 3.37296986579895 1925.084350585938 3.604159832000732 1924.550170898438 3.907359838485718 C 1924.153076171875 4.132692337036133 1923.654052734375 4.060581207275391 1923.337158203125 3.732369899749756 L 1922.467163085938 2.831439733505249 L 1921.028564453125 4.220499992370605 L 1921.89892578125 5.121699810028076 C 1922.215942382812 5.450009822845459 1922.2705078125 5.951329708099365 1922.031494140625 6.340139865875244 C 1921.66650390625 6.933719635009766 1921.3935546875 7.576109886169434 1921.220092773438 8.249469757080078 C 1921.106323242188 8.691299438476562 1920.7080078125 9.000100135803223 1920.251708984375 9.000100135803223 L 1919 9.000100135803223 L 1919 10.99969959259033 L 1920.251708984375 10.99969959259033 C 1920.7080078125 10.99969959259033 1921.106323242188 11.30850982666016 1921.220092773438 11.75034999847412 C 1921.372924804688 12.3438196182251 1921.604125976562 12.91553974151611 1921.9072265625 13.44962024688721 C 1922.132568359375 13.8464994430542 1922.060546875 14.34554004669189 1921.732299804688 14.66255950927734 L 1920.831420898438 15.53258514404297 L 1922.220458984375 16.97116851806641 L 1923.121704101562 16.10086059570312 C 1923.450317382812 15.78374862670898 1923.95166015625 15.72937774658203 1924.340087890625 15.96830940246582 C 1924.933959960938 16.33337020874023 1925.576293945312 16.60630989074707 1926.249267578125 16.77955055236816 C 1926.691162109375 16.89328956604004 1927 17.29170989990234 1927 17.74798011779785 L 1927 18.99979972839355 L 1928.999633789062 18.99979972839355 M 1929.999633789062 19.99979972839355 L 1926 19.99979972839355 L 1926 17.74798011779785 C 1925.2197265625 17.5471305847168 1924.485473632812 17.23152923583984 1923.81640625 16.82019996643066 L 1922.19580078125 18.38520050048828 L 1919.41748046875 15.50790023803711 L 1921.03759765625 13.94324970245361 C 1920.695190429688 13.34000015258789 1920.428833007812 12.68762969970703 1920.251708984375 11.99969959259033 L 1918 11.99969959259033 L 1918 8.000100135803223 L 1920.251708984375 8.000100135803223 C 1920.45263671875 7.219820022583008 1920.768188476562 6.485469818115234 1921.179565429688 5.816380023956299 L 1919.614501953125 4.195799827575684 L 1922.491821289062 1.417499899864197 L 1924.056518554688 3.037689924240112 C 1924.659790039062 2.695259809494019 1925.312133789062 2.428889751434326 1926 2.25180983543396 L 1926 -1.358032193365943e-07 L 1929.999633789062 -1.358032193365943e-07 L 1929.999633789062 2.25180983543396 C 1930.779907226562 2.452669858932495 1931.514282226562 2.768309831619263 1932.183349609375 3.179629802703857 L 1933.803955078125 1.614599823951721 L 1936.583129882812 4.491899967193604 L 1934.962280273438 6.057059764862061 C 1935.304565429688 6.660120010375977 1935.570922851562 7.312419891357422 1935.747924804688 8.000100135803223 L 1937.999755859375 8.000100135803223 L 1937.999755859375 11.99969959259033 L 1935.747924804688 11.99969959259033 C 1935.547119140625 12.77997970581055 1935.2314453125 13.51430988311768 1934.820068359375 14.18340015411377 L 1936.385131835938 15.80399990081787 L 1933.5078125 18.58230018615723 L 1931.943237304688 16.96208953857422 C 1931.339965820312 17.30451965332031 1930.687622070312 17.57089996337891 1929.999633789062 17.74798011779785 L 1929.999633789062 19.99979972839355 Z" stroke="none" fill="#9e9e9e"/>
                    </g>
                    <g id="Эллипс_392" data-name="Эллипс 392" transform="translate(19 355)" fill="none" stroke="#9e9e9e" stroke-width="1">
                      <circle cx="5" cy="5" r="5" stroke="none"/>
                      <circle cx="5" cy="5" r="4.5" fill="none"/>
                    </g>
                  </g></g></svg>
            </div>
              <div className="header-profile-info">
                <p className="text-reg-1 header-profile-name">{profile.name_profile}</p>
                <p className="text-reg-2 header-profile-city">{props.userInfo.email}</p>
              </div>
            </NavLink>
            {role_mobile()}
            <li className="header-menu-li"><NavLink to="/teacher/chat" className="header-menu-a"><img src={myCourse} alt="" className="myTask" /><img src={myCourseActive} alt="" className="myTask-active" />Чат</NavLink></li>
            {(props.userInfo.role == "ADMIN") && <NavLink to="/my_courses" className="header-menu-a header-menu-li" activeClassName="header-menu-li-active">Switch user</NavLink>}
            <li className="header-menu-li header-mobile-menu-logout"><a href="#" className="header-menu-a" onClick={logout}><img src={logoutImg} alt="" className="logout-img" />Выйти</a></li>
          </ul>
          <a href="#" className="close-header-mobile"><img src={closeMenu} alt="" onClick={() => setMobileActive(false)}/></a>
        </div>
        <ul className="header-menu">
          {role()}
          <NavLink to="/teacher/chat" className="header-menu-a header-menu-li" activeClassName="header-menu-li-active">Задания</NavLink>
          {(props.userInfo.role == "ADMIN") && <NavLink to="/my_courses" className="header-menu-a header-menu-li" activeClassName="header-menu-li-active">Switch user</NavLink>}
        </ul>
        <NavLink to="/edit_profile" className="header-profile">
          <img src="../img/profile2x.png" alt="" className="header-profile-img" />
          <div className="header-profile-info">
            <p className="text-reg-1 header-profile-name">{profile.name_profile}</p>
            <p className="text-reg-2 header-profile-city">{props.userInfo.email}</p>
          </div>
        </NavLink>
      </div>
    );
  };
