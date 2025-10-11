

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiMultiDirections = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M256 23.9A232.1 232.1 0 0 0 23.9 256 232.1 232.1 0 0 0 256 488.1 232.1 232.1 0 0 0 488.1 256 232.1 232.1 0 0 0 256 23.9zm0 15.87L301.3 153h-90.6l36.9-92.34 8.4-20.89zM256 183c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55zm-103 9.7v90.6L39.77 256l100.93-40.4 12.3-4.9zm206 0L472.2 256 359 301.3v-90.6zM256 231c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm-45.3 128h90.6L256 472.2l-40.4-100.9-4.9-12.3z" />
        </G>
      </Svg>
    );
  }

