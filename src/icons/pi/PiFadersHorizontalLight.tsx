

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFadersHorizontalLight = (props: IconProps) => {

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
          <Path  d="M178,80a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H184A6,6,0,0,1,178,80ZM40,86H146v18a6,6,0,0,0,12,0V56a6,6,0,0,0-12,0V74H40a6,6,0,0,0,0,12Zm176,84H120a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12ZM88,146a6,6,0,0,0-6,6v18H40a6,6,0,0,0,0,12H82v18a6,6,0,0,0,12,0V152A6,6,0,0,0,88,146Z" />
        </G>
      </Svg>
    );
  }

