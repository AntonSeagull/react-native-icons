

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTanzania = (props: IconProps) => {

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
          <Path  d="M57.08 38.67l57.42-6 5.9 82.23 73.8-25.69 30.9-57.39 151.6 81.48 9.4 34.4 60.2 42.7-21.5 75.5 32.5 22.3-13.7 71.9 18.1 20.6-2.7 36.8 35.3 28.4-84.9 34.3-163-.9-19.7-74.5-139.59-52.4c-43.39-47.3-54.69-107-69.46-165.4l61.69-60.1z" />
        </G>
      </Svg>
    );
  }

