

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowRightBold = (props: IconProps) => {

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
          <Path  d="M244,80v72a12,12,0,0,1-24,0V109l-91.51,91.52a12,12,0,0,1-17,0l-96-96a12,12,0,0,1,17-17L120,175l83-83H160a12,12,0,0,1,0-24h72A12,12,0,0,1,244,80Z" />
        </G>
      </Svg>
    );
  }

