

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPerspectiveBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M240,116H228V48a20,20,0,0,0-23.58-19.67l-160,29.09A20,20,0,0,0,28,77.09V116H16a12,12,0,0,0,0,24H28v38.91a20,20,0,0,0,16.42,19.67l160,29.09A20,20,0,0,0,228,208V140h12a12,12,0,0,0,0-24ZM52,80.43,204,52.8V116H52ZM204,203.2,52,175.57V140H204Z" />
        </G>
      </Svg>
    );
  }

