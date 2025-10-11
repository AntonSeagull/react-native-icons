

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFlagBannerBold = (props: IconProps) => {

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
          <Path  d="M242.15,49.59A12,12,0,0,0,232,44H40a12,12,0,0,0-8.48,20.49L71,104,31.52,143.51A12,12,0,0,0,40,164H167.28l-26.11,54.84a12,12,0,1,0,21.66,10.32l80-168A12,12,0,0,0,242.15,49.59ZM178.71,140H69l27.52-27.52a12,12,0,0,0,0-17L69,68H213Z" />
        </G>
      </Svg>
    );
  }

