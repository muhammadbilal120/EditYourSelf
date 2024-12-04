import React from 'react'
import './MainPage.css'
import userimg from "../../../public/imges/PNG/avatar.png"
import { Link } from 'react-router-dom'
// import Filter from '../Stories/FilterPage/Filter'

function MainPage() {
  return (
    <div className="create-section">
        {/* <img style={{position: "absolute" , width: "1180px", height: "600px" , zIndex: -99, opacity: 0.4}} src={BGimg} alt="" /> */}
      {/* <header className="header">
        <div className="user-info">
          <img src={userimg} alt="User" className="user-pic" />
          <span className='text-white'>Hallo !! Username</span>
        </div>
        <button className="settings-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>
        </button>
      </header> */}
      <div className="content">
        <h2>Ready to Create?</h2>
        <div className="creation-options">
          <div className="option">
            {/* <i className="icon stories-icon"></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" viewBox="0 0 51 51"><path fill="#1C274C" d="M50.53 37.053c.21-2.562.237-5.685.24-9.36a1.743 1743 0 1 0-3.488 0c-.003 3.695-.03 6.646-.228 9.077-.21 2.578-.604 4.407-1.267 5.798l-6.582-5.924a6.98 6.98 0 0 0-8.679-.522l-.693.487a4.65 4.65 0 0 1-5.964-.517l-9.976-9.976a5.35 5.35 0 0 0-7.304-.243L4.26 27.91l-.001-1.96c0-5.531.004-9.504.41-12.527.4-2.973 1.16-4.766 2.485-6.09 1.325-1.325 3.117-2.086 6.09-2.485 2.695-.363 6.145-.405 10.781-.41a1.744 1.744 0 1 0 0-3.488c-4.57.005-8.327.048-11.246.44-3.36.452-6.011 1.395-8.092 3.476-2.08 2.08-3.024 4.732-3.475 8.092C.77 16.24.77 20.448.77 25.816v.136q-.001 1.84.005 3.489c.02 4.323.11 7.804.608 10.602.507 2.849 1.46 5.145 3.304 6.99 2.081 2.08 4.732 3.023 8.092 3.475 3.283.441 7.49.441 12.858.441h.267c5.368 0 9.575 0 12.858-.441 3.36-.452 6.01-1.394 8.092-3.475a10.5 10.5 0 0 0 1.826-2.459c1.11-2.063 1.607-4.548 1.85-7.521" opacity="0.5"></path><path fill="#1C274C" fill-rule="evenodd" d="M39.522 23.45c-5.304 0-7.955 0-9.603-1.648s-1.648-4.3-1.648-9.603 0-7.955 1.648-9.602 4.3-1.648 9.603-1.648 7.954 0 9.602 1.648 1.648 4.299 1.648 9.602c0 5.304 0 7.955-1.648 9.603s-4.3 1.647-9.602 1.647m-3.637-6.96c-1.912-1.677-3.863-3.911-3.863-6.046 0-4.433 4.125-6.088 7.5-2.663 3.374-3.425 7.5-1.77 7.5 2.663 0 2.135-1.952 4.369-3.864 6.045-1.49 1.307-2.235 1.96-3.636 1.96s-2.147-.653-3.637-1.96" clip-rule="evenodd"></path></svg>
            <Link to="/Media" className='mt-3'>Let's Create</Link>
            <Link to="/Media">Create Stories</Link>
            <span>Share your moments</span>
          </div>
          <div className="option">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" viewBox="0 0 51 51"><path fill="#1C274C" d="M19.535 1.398a25 25 0 0 1 5.564-.622c13.807 0 25 11.193 25 25s-11.193 25-25 25c-1.91 0-3.773-.215-5.564-.622a1.744 1.744 0 1 1 .773-3.402c1.539.35 3.142.535 4.79.535 11.881 0 21.512-9.63 21.512-21.511S36.98 4.264 25.1 4.264c-1.649 0-3.252.185-4.791.535a1.744 1.744 0 0 1-.773-3.401"></path><g fill="#1C274C" opacity="0.5"><path d="M14.202 5.152a1.744 1.744 0 0 1-.546 2.405 21.6 21.6 0 0 0-6.773 6.773 1.744 1.744 0 1 1-2.952-1.858 25.1 25.1 0 0 1 7.866-7.867 1.744 1.744 0 0 1 2.405.547M4.477 36.674a1.744 1.744 0 0 1 2.406.546 21.6 21.6 0 0 0 6.773 6.773 1.744 1.744 0 1 1-1.86 2.952 25.1 25.1 0 0 1-7.865-7.866 1.744 1.744 0 0 1 .546-2.405"></path></g><path fill="#1C274C" d="M4.123 20.985a1.744 1.744 0 1 0-3.402-.774A25 25 0 0 0 .1 25.775c0 1.91.214 3.773.621 5.564a1.744 1.744 0 0 0 3.402-.773 21.6 21.6 0 0 1-.535-4.79c0-1.65.185-3.252.535-4.791" opacity="0.3"></path><path fill="#1C274C" d="M33.039 23.313c1.818 1.074 1.818 3.852 0 4.926l-10.978 6.48c-1.767 1.044-3.938-.314-3.938-2.462V19.295c0-2.148 2.171-3.506 3.938-2.463z"></path></svg>
          <Link to="/Media" className='mt-3'>Let's Make</Link>
            <Link to="/Media">Create Reels</Link>
            <span>Capture short videos</span>
          </div>
          <div className="option">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" viewBox="0 0 51 51"><path fill="#1C274C" d="M44.76 18.406c-23.611-58.324 20.892 51.616 0 0m-43.788 9.7c-.038-3.003 1.227-5.703 4.18-6.766a1.8 1.8 0 0 1 .408-.407c.34-.258.65-.334 1.051-.472C20.766 15.78 26.198 8.482 29.287 4.332c.902-1.211 1.622-2.177 2.364-2.844.412-.37.735-.607 1.222-.771.503-.17.971-.186 1.623-.092 1.432.207 2.9 1.066 4.336 2.403 3.178 2.961 6.53 8.573 8.893 14.412 2.375 5.867 3.78 12.046 3.054 16.114-.3 1.678-.96 3.055-2.054 4.004l-.001-.001a1.6 1.6 0 0 1-.209.151 4.33 4.33 0 0 1-2.192.663c-.634.022-1.189-.075-1.806-.19-1.11-.208-2.173-.48-3.318-.774-3.73-.956-8.384-2.149-15.778-1.369-.147.44-.255.911-.26 1.331-.003.28.029.501.12.576l.124.102c.692.566 1.033.845 1.238 1.531.159.537.092 1-.039 1.911l-.044.307c-.073.522.225.637.523.751.873.335 1.747.67 2.22 1.807.13.264.167.557.107.84-.38 1.753-1.53 2.642-2.68 3.531-.226.175-.452.35-.654.522l-.003-.002a2 2 0 0 1-.102.08c-2.742 1.971-4.649 1.384-6.123-.275-.94-1.057-1.536-2.534-2.092-3.912l-.229-.558c-.793-1.932-1.389-4.241-1.99-6.645l-.152.042q-.913.243-1.82.505c-.06.017-.09.028-.115.037-.541.194-.812.29-1.248.15-3.601.831-6.596-.746-8.607-3.278a12.3 12.3 0 0 1-1.918-3.482 11.9 11.9 0 0 1-.705-3.803" opacity="0.5"></path><path fill="#1C274C" fill-rule="evenodd" d="M6.202 22.513c-7.45 1.971-2.57 17.318 6.157 14.632.336.19.331.1.724-.013q1.8-.524 3.625-.971c.722 2.864 1.378 5.681 2.302 7.93 1.178 2.868 2.405 6.697 5.978 4.128 1.127-.96 2.526-1.7 2.87-3.292-.573-1.547-3.24-.635-2.861-3.31.262-1.852.32-1.72-.78-2.622-1.113-.914-.533-2.992.047-4.255 3.88-.483 7.054-.454 9.745-.18-3.409-3.468-5.822-7.139-7.314-10.966-1.497-3.842-2.062-7.825-1.769-11.904-3.709 3.497-9.188 7.265-17.771 10.105-.699.231-.555.147-.953.718" clip-rule="evenodd"></path><path fill="#1C274C" fill-rule="evenodd" d="M36.407 34.807c1.597.34 3.794.905 5.678 1.364-3.856-3.475-7.006-8.813-9.135-14.278-2.274-5.834-3.391-11.9-2.978-16.072-1.02 1.31-2.158 2.783-3.271 4.08-1.23 8.955 1.723 17.424 9.706 24.906M16.693 36.15c.6 2.4 1.535 6.038 2.317 7.94 1.178 2.869 2.406 6.698 5.978 4.129 1.127-.96 2.526-1.7 2.87-3.292-.573-1.547-3.239-.635-2.86-3.31.261-1.852.319-1.72-.78-2.622-1.072-.88-.574-2.84-.018-4.11 1.455-.642 5.405-.705 9.754-.315-2.734-2.782-4.8-5.38-6.646-9.433-4.16 3.283-6.454 7.73-10.615 11.012" clip-rule="evenodd"></path></svg>
          <Link to="/Media" className='mt-3'>Let's Promote</Link>
            <Link to="/Media">Create Ads</Link>
            <span>Reach your audience</span>
          </div>
        </div>
        <h2 className='fs-5 mt-5 pt-5'>Our Ads Options</h2>
        <div className="ads-options">
          <div className="ads-option">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" viewBox="0 0 31 31"><path fill="#1C274C" d="M30.105 15.796c0 8.285-6.716 15-15 15s-15-6.715-15-15 6.716-15 15-15 15 6.716 15 15" opacity="0.5"></path><path fill="white" d="M22.315 26.313a12.7 12.7 0 0 1-7.21 2.233c-2.676 0-5.16-.824-7.21-2.233-.906-.622-1.293-1.807-.767-2.772 1.092-2 3.342-3.245 7.977-3.245s6.885 1.246 7.977 3.245c.526.965.14 2.15-.767 2.772M15.105 15.796a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"></path></svg>
            <a href='#'>Business Cards</a>
          </div>
          <div className="ads-option">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" viewBox="0 0 31 31"><path fill="#1C274C" d="M.084 4.542c.18-.665.85-1.055 1.497-.87l2.762.788a4.45 4.45 0 0 1 3.074 3.129l3.488 12.976.257.911a4.84 4.84 0 0 1 2.468 2.112l.503-.16 14.384-3.841c.65-.174 1.314.227 1.483.895.169.669-.221 1.35-.872 1.525l-14.33 3.827-.533.17a4.824 4.824 0 0 1-3.585 4.627 4.836 4.836 0 0 1-5.92-3.408 4.82 4.82 0 0 1 3.802-5.989l-3.49-12.98A1.99 1.99 0 0 0 3.694 6.87L.93 6.08C.283 5.896-.096 5.207.084 4.542"></path><path fill="#1C274C" d="m11.9 10.348.835 3.103c.786 2.926 1.18 4.39 2.335 5.055 1.157.665 2.624.273 5.56-.51l3.113-.832c2.935-.784 4.402-1.176 5.07-2.329.667-1.153.274-2.616-.512-5.541l-.835-3.104c-.786-2.926-1.18-4.389-2.335-5.054-1.157-.666-2.624-.274-5.56.51l-3.113.832c-2.935.784-4.402 1.176-5.07 2.328-.668 1.153-.274 2.616.512 5.542" opacity="0.5"></path></svg>
            <a href='#'>Services Flyers</a>
          </div>
          <div className="ads-option">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" viewBox="0 0 31 31"><path fill="#1C274C" d="M.973 12.796A7.5 7.5 0 0 1 9.58 5.377a6.753 6.753 0 0 1 12.788 0 7.5 7.5 0 0 1 4.106 14.295v5.124c0 2.829 0 4.243-.878 5.122-.88.878-2.293.878-5.122.878h-9c-2.828 0-4.243 0-5.121-.878-.879-.879-.879-2.293-.879-5.122v-5.124a7.5 7.5 0 0 1-4.5-6.876" opacity="0.5"></path><path fill="#1C274C" d="M11.473 23.671a1.125 1.125 0 0 0 0 2.25h9a1.125 1.125 0 1 0 0-2.25z"></path></svg>
            <a href='#'>Restaurant Offers</a>
          </div>
          <div className="ads-option">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" viewBox="0 0 31 31"><path fill="#1C274C" d="M11.5 2.733c-.365.31-.547.466-.743.597-.447.3-.949.508-1.477.612-.23.046-.47.065-.948.103-1.202.096-1.803.144-2.305.321a4.07 4.07 0 0 0-2.481 2.482c-.177.501-.225 1.102-.321 2.304-.039.479-.058.718-.103.948a4.1 4.1 0 0 1-.612 1.478c-.13.195-.286.377-.598.743C1.13 13.239.74 13.698.51 14.177a4.07 4.07 0 0 0 0 3.51c.229.48.62.939 1.402 1.857.312.365.467.547.598.742.3.448.508.95.612 1.478.045.23.064.47.103.948.096 1.202.144 1.803.32 2.305a4.07 4.07 0 0 0 2.482 2.481c.502.177 1.103.225 2.305.321.478.039.718.058.948.103a4.1 4.1 0 0 1 1.477.612c.196.13.378.286.743.598.918.782 1.377 1.173 1.857 1.402 1.11.53 2.4.53 3.51 0 .48-.229.938-.62 1.856-1.402.366-.312.548-.467.743-.598.447-.3.95-.508 1.478-.612.23-.045.47-.064.948-.103 1.202-.096 1.803-.144 2.304-.32a4.07 4.07 0 0 0 2.482-2.482c.177-.502.225-1.103.321-2.305.038-.478.057-.718.103-.948a4.1 4.1 0 0 1 .612-1.477c.13-.195.286-.378.597-.743.783-.918 1.174-1.377 1.403-1.857.53-1.11.53-2.4 0-3.51-.23-.48-.62-.938-1.403-1.856-.31-.366-.467-.548-.597-.743a4.1 4.1 0 0 1-.612-1.478c-.046-.23-.065-.47-.103-.948-.096-1.202-.144-1.803-.321-2.304a4.07 4.07 0 0 0-2.482-2.482c-.501-.177-1.102-.225-2.304-.321-.479-.038-.718-.057-.948-.103a4.1 4.1 0 0 1-1.478-.612c-.195-.13-.378-.286-.743-.597-.918-.783-1.376-1.174-1.856-1.403a4.07 4.07 0 0 0-3.51 0c-.48.23-.939.62-1.857 1.403" opacity="0.5"></path><path fill="#1C274C" d="M20.858 10.187a1.22 1.22 0 0 1 0 1.727l-9.766 9.766a1.22 1.22 0 1 1-1.727-1.727l9.767-9.766a1.22 1.22 0 0 1 1.726 0M20.809 20.003a1.628 1.628 0 1 1-3.256 0 1.628 1.628 0 0 1 3.256 0M11.043 13.492a1.628 1.628 0 1 0 0-3.256 1.628 1.628 0 0 0 0 3.256"></path></svg>
            <a href='#`'>Specials Offers</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage