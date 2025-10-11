

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const AiTwotoneTablet = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752z" fill="#333" />
          <Path d="M232 888h560V136H232v752zm280-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z" fill="#E6E6E6" />
          <Path d="M472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z" fill="#333" />
        </G>
      </Svg>
    );
  }

