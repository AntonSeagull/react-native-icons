

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowDownLeftBold = (props: IconProps) => {

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
          <Path  d="M200.49,72.48,93,180h75a12,12,0,0,1,0,24H64a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v75L183.51,55.51a12,12,0,0,1,17,17Z" />
        </G>
      </Svg>
    );
  }

