

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStatusInfoSmall = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 12 12"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 6, 6)`}
      >
        <G fill={color} stroke={color}>
          
        </G>
      </Svg>
    );
  }

