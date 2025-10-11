

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFlagPennantLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M242,98.33l-184-64A6,6,0,0,0,50,40V216a6,6,0,0,0,12,0V172.27l180-62.6a6,6,0,0,0,0-11.34ZM62,159.56V48.44L221.74,104Z" />
        </G>
      </Svg>
    );
  }

