

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const AiFillMacCommand = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 512, 512)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M624 672c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48h-48v48zM720 352c0-26.5-21.5-48-48-48s-48 21.5-48 48v48h48c26.5 0 48-21.5 48-48z" pId="7960" />
          <Path  d="M928 64H96c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM672 560c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112v-48h-96v48c0 61.9-50.1 112-112 112s-112-50.1-112-112 50.1-112 112-112h48v-96h-48c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112v48h96v-48c0-61.9 50.1-112 112-112s112 50.1 112 112-50.1 112-112 112h-48v96h48z" pId="7961" />
          <Path  d="M464 464h96v96h-96zM352 304c-26.5 0-48 21.5-48 48s21.5 48 48 48h48v-48c0-26.5-21.5-48-48-48zM304 672c0 26.5 21.5 48 48 48s48-21.5 48-48v-48h-48c-26.5 0-48 21.5-48 48z" pId="7962" />
        </G>
      </Svg>
    );
  }

