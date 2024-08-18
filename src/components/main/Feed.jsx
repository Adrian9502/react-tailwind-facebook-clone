import { FaGlobeAmericas } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { useMemo } from "react";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useState } from "react";
function HeartIcon() {
  return (
    <img
      className="w-4 h-4"
      src="data:image/svg+xml,<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><g clip-path='url(%23clip0_15251_63610)'><path d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/><path d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/><path d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/></g><defs><radialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'><stop offset='.5637' stop-color='%23E11731' stop-opacity='0'/><stop offset='1' stop-color='%23E11731' stop-opacity='.1'/></radialGradient><linearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'><stop stop-color='%23FF74AE'/><stop offset='.5001' stop-color='%23FA2E3E'/><stop offset='1' stop-color='%23FF5758'/></linearGradient><clipPath id='clip0_15251_63610'><path fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/></clipPath></defs></svg>"
      alt=""
    />
  );
}
function CareIcon() {
  return (
    <img
      className="w-4 h-4"
      src="data:image/svg+xml,<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><g clip-path='url(%23clip0_15251_63610)'><path d='M15.9982 7.9998c0 4.4181-3.5815 7.9996-7.9996 7.9996-4.418 0-7.9996-3.5815-7.9996-7.9996 0-4.418 3.5816-7.9996 7.9996-7.9996 4.4181 0 7.9996 3.5816 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/><path d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/><mask id='mask0_15251_63610' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='6' y='13' width='8' height='3'><path d='M13.6084 13.7029c-1.4438 1.4203-3.4244 2.2965-5.6097 2.2965a8.0393 8.0393 0 0 1-1.5715-.1543c.6898-.2867 1.6353-.7368 2.5437-1.3171 1.2793.5295 3.4828.2415 4.6285-.8326l.009.0075Z' fill='%23D9D9D9'/></mask><g mask='url(%23mask0_15251_63610)'><path d='M15.9982 7.9998c0 4.4181-3.5815 7.9996-7.9996 7.9996-4.418 0-7.9996-3.5815-7.9996-7.9996 0-4.418 3.5816-7.9996 7.9996-7.9996 4.4181 0 7.9996 3.5816 7.9996 7.9996Z' fill='url(%23paint2_linear_15251_63610)'/></g><path d='M15.9962 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S-.003 12.4176-.003 7.9996 3.5786 0 7.9967 0c4.418 0 7.9995 3.5815 7.9995 7.9996Z' fill='url(%23paint3_radial_15251_63610)'/><path d='M15.9962 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S-.003 12.4176-.003 7.9996 3.5786 0 7.9967 0c4.418 0 7.9995 3.5815 7.9995 7.9996Z' fill='url(%23paint4_radial_15251_63610)'/><path d='M15.9962 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S-.003 12.4176-.003 7.9996 3.5786 0 7.9967 0c4.418 0 7.9995 3.5815 7.9995 7.9996Z' fill='url(%23paint5_radial_15251_63610)' style='mix-blend-mode:multiply'/><path d='M15.9962 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S-.003 12.4176-.003 7.9996 3.5786 0 7.9967 0c4.418 0 7.9995 3.5815 7.9995 7.9996Z' fill='url(%23paint6_radial_15251_63610)' style='mix-blend-mode:multiply'/><path fill-rule='evenodd' clip-rule='evenodd' d='M9.585 7.7886a.499.499 0 0 1 .026.0043 2.849 2.849 0 0 1 1.8175 1.202 2.8423 2.8423 0 0 1 .4349 2.1333c-.2461 1.2665-1.3291 2.3137-2.4304 3.0886-1.1259.7923-2.3926 1.3839-3.2016 1.7072a1.08 1.08 0 0 1-1.151-.2237c-.6289-.6028-1.5818-1.6259-2.329-2.7823-.7307-1.131-1.3425-2.5076-1.0963-3.7741a2.8425 2.8425 0 0 1 1.2024-1.8151 2.8492 2.8492 0 0 1 2.1354-.4336.5086.5086 0 0 1 .0268.006 2.9735 2.9735 0 0 1 1.4594.8686c.1647.1788.3813.4853.5716.8626.3155-.2781.6296-.482.8526-.5874a2.9734 2.9734 0 0 1 1.6817-.2564Z' fill='url(%23paint7_radial_15251_63610)'/><path fill-rule='evenodd' clip-rule='evenodd' d='M9.585 7.7886a.499.499 0 0 1 .026.0043 2.849 2.849 0 0 1 1.8175 1.202 2.8423 2.8423 0 0 1 .4349 2.1333c-.2461 1.2665-1.3291 2.3137-2.4304 3.0886-1.1259.7923-2.3926 1.3839-3.2016 1.7072a1.08 1.08 0 0 1-1.151-.2237c-.6289-.6028-1.5818-1.6259-2.329-2.7823-.7307-1.131-1.3425-2.5076-1.0963-3.7741a2.8425 2.8425 0 0 1 1.2024-1.8151 2.8492 2.8492 0 0 1 2.1354-.4336.5086.5086 0 0 1 .0268.006 2.9735 2.9735 0 0 1 1.4594.8686c.1647.1788.3813.4853.5716.8626.3155-.2781.6296-.482.8526-.5874a2.9734 2.9734 0 0 1 1.6817-.2564Z' fill='url(%23paint8_radial_15251_63610)'/><path fill-rule='evenodd' clip-rule='evenodd' d='M9.585 7.7886a.499.499 0 0 1 .026.0043 2.849 2.849 0 0 1 1.8175 1.202 2.8423 2.8423 0 0 1 .4349 2.1333c-.2461 1.2665-1.3291 2.3137-2.4304 3.0886-1.1259.7923-2.3926 1.3839-3.2016 1.7072a1.08 1.08 0 0 1-1.151-.2237c-.6289-.6028-1.5818-1.6259-2.329-2.7823-.7307-1.131-1.3425-2.5076-1.0963-3.7741a2.8425 2.8425 0 0 1 1.2024-1.8151 2.8492 2.8492 0 0 1 2.1354-.4336.5086.5086 0 0 1 .0268.006 2.9735 2.9735 0 0 1 1.4594.8686c.1647.1788.3813.4853.5716.8626.3155-.2781.6296-.482.8526-.5874a2.9734 2.9734 0 0 1 1.6817-.2564Z' fill='url(%23paint9_radial_15251_63610)'/><mask id='mask1_15251_63610' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='-1' y='0' width='17' height='16'><circle cx='7.9976' cy='7.9998' r='7.9996' fill='%23fff'/></mask><g mask='url(%23mask1_15251_63610)' fill-rule='evenodd' clip-rule='evenodd'><path d='M1.3582 7.6194C.836 7.1064.318 7.2994.118 7.9596c-.2.6603-.0513 2.4955 1.0427 3.3962 2.752 2.2662 5.464.8613 5.5191-.5247.0498-1.2472-1.3555-1.113-1.8127-1.0879-.0311.0018-.0445-.0412-.0178-.0582.096-.0626.2535-.1719.4198-.3125.3594-.3044.1753-.8326-.3264-.6813-.0756.0224-1.2968.3904-2.0707.0967-.8778-.3331-.9828-.6465-1.5147-1.1685h.0009Z' fill='%23FFF287'/><path d='M1.3582 7.6194C.836 7.1064.318 7.2994.118 7.9596c-.2.6603-.0513 2.4955 1.0427 3.3962 2.752 2.2662 5.464.8613 5.5191-.5247.0498-1.2472-1.3555-1.113-1.8127-1.0879-.0311.0018-.0445-.0412-.0178-.0582.096-.0626.2535-.1719.4198-.3125.3594-.3044.1753-.8326-.3264-.6813-.0756.0224-1.2968.3904-2.0707.0967-.8778-.3331-.9828-.6465-1.5147-1.1685h.0009Z' fill='url(%23paint10_linear_15251_63610)'/><path d='M1.3582 7.6194C.836 7.1064.318 7.2994.118 7.9596c-.2.6603-.0513 2.4955 1.0427 3.3962 2.752 2.2662 5.464.8613 5.5191-.5247.0498-1.2472-1.3555-1.113-1.8127-1.0879-.0311.0018-.0445-.0412-.0178-.0582.096-.0626.2535-.1719.4198-.3125.3594-.3044.1753-.8326-.3264-.6813-.0756.0224-1.2968.3904-2.0707.0967-.8778-.3331-.9828-.6465-1.5147-1.1685h.0009Z' fill='url(%23paint11_radial_15251_63610)' fill-opacity='.6'/><path d='M1.3582 7.6194C.836 7.1064.318 7.2994.118 7.9596c-.2.6603-.0513 2.4955 1.0427 3.3962 2.752 2.2662 5.464.8613 5.5191-.5247.0498-1.2472-1.3555-1.113-1.8127-1.0879-.0311.0018-.0445-.0412-.0178-.0582.096-.0626.2535-.1719.4198-.3125.3594-.3044.1753-.8326-.3264-.6813-.0756.0224-1.2968.3904-2.0707.0967-.8778-.3331-.9828-.6465-1.5147-1.1685h.0009Z' fill='url(%23paint12_radial_15251_63610)'/><path d='M1.3582 7.6194C.836 7.1064.318 7.2994.118 7.9596c-.2.6603-.0513 2.4955 1.0427 3.3962 2.752 2.2662 5.464.8613 5.5191-.5247.0498-1.2472-1.3555-1.113-1.8127-1.0879-.0311.0018-.0445-.0412-.0178-.0582.096-.0626.2535-.1719.4198-.3125.3594-.3044.1753-.8326-.3264-.6813-.0756.0224-1.2968.3904-2.0707.0967-.8778-.3331-.9828-.6465-1.5147-1.1685h.0009Z' fill='url(%23paint13_radial_15251_63610)'/><path d='M1.3582 7.6194C.836 7.1064.318 7.2994.118 7.9596c-.2.6603-.0513 2.4955 1.0427 3.3962 2.752 2.2662 5.464.8613 5.5191-.5247.0498-1.2472-1.3555-1.113-1.8127-1.0879-.0311.0018-.0445-.0412-.0178-.0582.096-.0626.2535-.1719.4198-.3125.3594-.3044.1753-.8326-.3264-.6813-.0756.0224-1.2968.3904-2.0707.0967-.8778-.3331-.9828-.6465-1.5147-1.1685h.0009Z' fill='url(%23paint14_radial_15251_63610)'/><path d='M14.2827 7.7582c.3146-.7585.3146-1.1585.7145-1.3585.4-.2 1 .4 1 1.6 0 1.9998-.8 4.1957-2.3999 5.6956-1.5999 1.5-5.2626 1.4668-5.5906-.1845-.2727-1.3695 1.1697-1.5059 1.6332-1.571.0316-.0045.0378-.0542.0079-.0677a4.201 4.201 0 0 1-.474-.262c-.4125-.2647-.3176-.8871.211-.8203.599.0913 1.3395.2647 1.978.1997 1.8469-.1888 2.6052-2.4728 2.9199-3.2313Z' fill='%23FFF287'/><path d='M14.2827 7.7582c.3146-.7585.3146-1.1585.7145-1.3585.4-.2 1 .4 1 1.6 0 1.9998-.8 4.1957-2.3999 5.6956-1.5999 1.5-5.2626 1.4668-5.5906-.1845-.2727-1.3695 1.1697-1.5059 1.6332-1.571.0316-.0045.0378-.0542.0079-.0677a4.201 4.201 0 0 1-.474-.262c-.4125-.2647-.3176-.8871.211-.8203.599.0913 1.3395.2647 1.978.1997 1.8469-.1888 2.6052-2.4728 2.9199-3.2313Z' fill='url(%23paint15_linear_15251_63610)'/><path d='M14.2827 7.7582c.3146-.7585.3146-1.1585.7145-1.3585.4-.2 1 .4 1 1.6 0 1.9998-.8 4.1957-2.3999 5.6956-1.5999 1.5-5.2626 1.4668-5.5906-.1845-.2727-1.3695 1.1697-1.5059 1.6332-1.571.0316-.0045.0378-.0542.0079-.0677a4.201 4.201 0 0 1-.474-.262c-.4125-.2647-.3176-.8871.211-.8203.599.0913 1.3395.2647 1.978.1997 1.8469-.1888 2.6052-2.4728 2.9199-3.2313Z' fill='url(%23paint16_radial_15251_63610)' fill-opacity='.8'/><path d='M14.2827 7.7582c.3146-.7585.3146-1.1585.7145-1.3585.4-.2 1 .4 1 1.6 0 1.9998-.8 4.1957-2.3999 5.6956-1.5999 1.5-5.2626 1.4668-5.5906-.1845-.2727-1.3695 1.1697-1.5059 1.6332-1.571.0316-.0045.0378-.0542.0079-.0677a4.201 4.201 0 0 1-.474-.262c-.4125-.2647-.3176-.8871.211-.8203.599.0913 1.3395.2647 1.978.1997 1.8469-.1888 2.6052-2.4728 2.9199-3.2313Z' fill='url(%23paint17_radial_15251_63610)'/><path d='M14.2827 7.7582c.3146-.7585.3146-1.1585.7145-1.3585.4-.2 1 .4 1 1.6 0 1.9998-.8 4.1957-2.3999 5.6956-1.5999 1.5-5.2626 1.4668-5.5906-.1845-.2727-1.3695 1.1697-1.5059 1.6332-1.571.0316-.0045.0378-.0542.0079-.0677a4.201 4.201 0 0 1-.474-.262c-.4125-.2647-.3176-.8871.211-.8203.599.0913 1.3395.2647 1.978.1997 1.8469-.1888 2.6052-2.4728 2.9199-3.2313Z' fill='url(%23paint18_radial_15251_63610)' fill-opacity='.9' style='mix-blend-mode:screen'/></g><path d='M7.9977 6.8c.71 0 1.1723-.1164 1.4952-.2331.3063-.1108.4-.4145.08-.4762C9.277 6.0336 8.7886 6 7.9978 6c-.7753 0-1.2813.0342-1.5903.0988-.3085.0646-.2235.3583.073.4654.3257.1177.8017.2357 1.5173.2357Z' fill='%234B280E'/><path fill-rule='evenodd' clip-rule='evenodd' d='M10.1526 2.0928a3.3945 3.3945 0 0 1 2.0299.699.4.4 0 0 0 .4863-.6352 4.1946 4.1946 0 0 0-2.5083-.8637.4.4 0 1 0-.0079.7999ZM5.843 2.0928a3.3946 3.3946 0 0 0-2.03.699.4.4 0 1 1-.4862-.6352 4.1945 4.1945 0 0 1 2.5083-.8637.4.4 0 1 1 .008.7999Z' fill='%23E0761A'/><path fill-rule='evenodd' clip-rule='evenodd' d='M9.998 4.3577c-.001.7238.483.936 1.1999 1.023.7099.1024 1.1878-.1978 1.1998-1.023.01-.6941-.3809-1.5413-1.1998-1.5575-.8189.0162-1.1999.8634-1.1999 1.5575ZM5.998 4.3577c.001.7238-.483.936-1.1998 1.023-.71.1024-1.1879-.1978-1.1999-1.023-.01-.6941.381-1.5413 1.1999-1.5575.8189.0162 1.1998.8634 1.1998 1.5575Z' fill='%231C1C1D'/></g><defs><radialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'><stop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/><stop offset='1' stop-color='%23FF5758' stop-opacity='.1'/></radialGradient><radialGradient id='paint3_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(.1233 -1.60292 4.45604 .34277 10.6837 13.9363)'><stop stop-color='%23791119' stop-opacity='.7'/><stop offset='1' stop-color='%23791119' stop-opacity='0'/></radialGradient><radialGradient id='paint4_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(.92919 2.03556 -13.3287 6.08424 12.9748 11.0609)'><stop stop-color='%23791119' stop-opacity='.08'/><stop offset='1' stop-color='%23791119' stop-opacity='0'/></radialGradient><radialGradient id='paint5_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(.5 -2 2.8733 .71832 3 11)'><stop offset='.2088' stop-color='%23791119' stop-opacity='.4'/><stop offset='1' stop-color='%23791119' stop-opacity='0'/></radialGradient><radialGradient id='paint6_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(1.5 -1 1.43665 2.15497 2 10)'><stop offset='.2088' stop-color='%23791119' stop-opacity='.3'/><stop offset='1' stop-color='%23791119' stop-opacity='0'/></radialGradient><radialGradient id='paint7_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4.40005 5.20005 -6.1455 5.20005 4.198 9.4003)'><stop offset='.3729' stop-color='%23FA2E3E'/><stop offset='.9266' stop-color='%23E11731'/></radialGradient><radialGradient id='paint8_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(-92.693 7.5086 3.7543) scale(1.72921 2.52467)'><stop stop-color='%23791119' stop-opacity='.9'/><stop offset='1' stop-color='%23791119' stop-opacity='0'/></radialGradient><radialGradient id='paint9_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(-65.627 15.8732 -.8589) scale(1.94093 2.8338)'><stop stop-color='%23791119' stop-opacity='.9'/><stop offset='1' stop-color='%23791119' stop-opacity='0'/></radialGradient><radialGradient id='paint11_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(93.472 -1.1146 5.8598) scale(4.00047 8.84233)'><stop stop-color='%23FFF287' stop-opacity='0'/><stop offset='.9846' stop-color='%23FF5758' stop-opacity='.8'/></radialGradient><radialGradient id='paint12_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(131.396 1.7386 3.9605) scale(7.98139 8.42047)'><stop offset='.6481' stop-color='%23FFE480'/><stop offset='.9167' stop-color='%23FFE480' stop-opacity='0'/></radialGradient><radialGradient id='paint13_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(115.036 -.1572 5.1636) scale(5.20766 4.5125)'><stop offset='.9124' stop-color='%23FFE480' stop-opacity='0'/><stop offset='1' stop-color='%23FFE480'/></radialGradient><radialGradient id='paint14_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(1.35706 1.5577 -3.27818 2.85593 0 7.5)'><stop stop-color='%23FFE483'/><stop offset='.9167' stop-color='%23FFEB80' stop-opacity='0'/></radialGradient><radialGradient id='paint16_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(38.267 -7.741 22.3658) scale(3.94718 18.9414)'><stop stop-color='%23FFF287' stop-opacity='0'/><stop offset='.7371' stop-color='%23FF5758' stop-opacity='.4'/></radialGradient><radialGradient id='paint17_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(2.93607 2.57398 -2.89968 3.3076 10.5 8)'><stop offset='.8254' stop-color='%23FFE480'/><stop offset='1' stop-color='%23FFE480' stop-opacity='0'/></radialGradient><radialGradient id='paint18_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(4.5 2.5 -3.1886 5.73949 11 9)'><stop offset='.897' stop-color='%23FFE480' stop-opacity='0'/><stop offset='1' stop-color='%23FFE480'/></radialGradient><linearGradient id='paint0_linear_15251_63610' x1='2.5019' y1='2.5002' x2='16.002' y2='16.0002' gradientUnits='userSpaceOnUse'><stop offset='.2619' stop-color='%23FFF287'/><stop offset='1' stop-color='%23F68628'/></linearGradient><linearGradient id='paint2_linear_15251_63610' x1='10' y1='14.5002' x2='10' y2='17.0002' gradientUnits='userSpaceOnUse'><stop stop-color='%23FFF287' stop-opacity='0'/><stop offset='1' stop-color='%23FFF287'/></linearGradient><linearGradient id='paint10_linear_15251_63610' x1='4.4115' y1='6.5983' x2='2.6271' y2='9.9854' gradientUnits='userSpaceOnUse'><stop stop-color='%23FFF287'/><stop offset='1' stop-color='%23F68628' stop-opacity='.3'/></linearGradient><linearGradient id='paint15_linear_15251_63610' x1='7.9727' y1='12.4766' x2='18.4483' y2='13.8876' gradientUnits='userSpaceOnUse'><stop offset='.0835' stop-color='%23FFF287'/><stop offset='1' stop-color='%23F68628'/></linearGradient><clipPath id='clip0_15251_63610'><path fill='%23fff' d='M-.002.0002h16.0001v16h-16z'/></clipPath></defs></svg>"
      alt=""
    />
  );
}
function LikeIcon() {
  return (
    <img
      className="w-4 h-4"
      src="data:image/svg+xml,<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/><path d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/><path d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/><path d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/><defs><radialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'><stop offset='.5618' stop-color='%230866FF' stop-opacity='0'/><stop offset='1' stop-color='%230866FF' stop-opacity='.1'/></radialGradient><radialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'><stop offset='.3143' stop-color='%2302ADFC'/><stop offset='1' stop-color='%2302ADFC' stop-opacity='0'/></radialGradient><linearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'><stop stop-color='%2302ADFC'/><stop offset='.5' stop-color='%230866FF'/><stop offset='1' stop-color='%232B7EFF'/></linearGradient></defs></svg>"
      alt=""
    />
  );
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function Feed({
  userName,
  imageUrl,
  userProfilePic,
  likes,
  description,
  comments,
  views,
}) {
  const randomNumber = useMemo(() => getRandomNumber(1, 23), []);

  const [isLiked, setIsLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleLike = () => {
    setIsLiked((prevIsLiked) => {
      const newIsLiked = !prevIsLiked;
      setCurrentLikes((prevLikes) => prevLikes + (newIsLiked ? 1 : -1));
      return newIsLiked;
    });
  };
  return (
    <section className="bg-zinc-800 rounded-lg mb-5 p-3">
      {/* user info , time */}
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={userProfilePic}
            className="w-10 h-10 mr-2 rounded-full"
            alt={userName}
          />
          <div className="flex font-semibold flex-col">
            <span className="text-sm text-white">{userName}</span>
            <span className="text-xs text-gray-400 flex items-center ">
              {randomNumber} hours ago &middot;
              <FaGlobeAmericas className="ml-1 mt-1" />
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-1 ">
          <div className="rounded-full p-2 cursor-pointer hover:bg-zinc-600">
            <BsThreeDots color="white" size={23} />
          </div>
          <div className="rounded-full hover:bg-zinc-600 cursor-pointer p-2">
            <IoMdClose color="white" size={23} />
          </div>
        </div>
      </div>
      {/* description */}
      <div className="text-white text-sm mt-1 mb-2">{description}</div>
      {/* image post */}
      <img src={imageUrl} className="max-h-96 mb-2 rounded-md w-full" alt="" />
      {/* reaction/comments/share */}
      <div className="pt-1 pb-2 flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <HeartIcon />
          <CareIcon />
          <LikeIcon />
          <span className="ml-1 font-semibold text-xs text-zinc-400 hover:underline cursor-pointer">
            {currentLikes} likes
          </span>
        </div>
        <div className="flex font-semibold text-xs text-zinc-400 gap-2">
          <span className="hover:underline cursor-pointer">
            {comments} comments
          </span>
          <span className="hover:underline cursor-pointer">{views} shares</span>
        </div>
      </div>
      <hr className="border-t my-1 border-zinc-700" />
      <div className="text-zinc-400 grid grid-cols-3 font-semibold text-sm gap-1">
        <div
          className="hover:bg-zinc-700 transition cursor-pointer rounded-md flex items-center justify-center py-1.5 gap-2"
          onClick={handleLike}
        >
          <AiFillLike
            size={20}
            className={`transition-colors duration-300 ${
              isLiked ? "text-blue-500  animate-like" : ""
            }`}
          />
          <span className={`${isLiked ? "text-blue-500 " : ""}`}>Like</span>
        </div>
        <div className="hover:bg-zinc-700 cursor-pointer transition rounded-md flex items-center gap-2 justify-center ">
          <FaRegComment size={20} />
          <span>Comment</span>
        </div>
        <div className="hover:bg-zinc-700 transition rounded-md flex items-center gap-2 justify-center cursor-pointer ">
          <FaShare size={20} />
          <span>Share</span>
        </div>
      </div>
    </section>
  );
}

Feed.propTypes = {
  userName: PropTypes.string,
  userProfilePic: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
  description: PropTypes.string,
  views: PropTypes.number,
};
