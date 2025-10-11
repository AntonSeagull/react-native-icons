

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStepsOption = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="none" d="M24,9 L19,9 L19,14 L14,14 L14,19 L9,19 L9,24 M1,24 L1,16.9970301 C1,16.4463856 1.31329632,15.6867037 1.70336215,15.2966378 L15.2966378,1.70336215 C15.685094,1.31490596 16.4530363,1 16.9970301,1 L24,1" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

