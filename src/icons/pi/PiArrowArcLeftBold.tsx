

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowArcLeftBold = (props: IconProps) => {

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
          <Path  d="M236,184a12,12,0,0,1-24,0A84,84,0,0,0,68.6,124.6L53.11,140H88a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v35.16l15.66-15.55A108,108,0,0,1,236,184Z" />
        </G>
      </Svg>
    );
  }

