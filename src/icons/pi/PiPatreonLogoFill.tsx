

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPatreonLogoFill = (props: IconProps) => {

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
          <Path  d="M232,93.17c0,41-29.69,52.47-53.55,61.67-8.41,3.24-16.35,6.3-22.21,10.28-11.39,7.72-18.59,21.78-25.55,35.38-9.94,19.42-20.23,39.5-43.17,39.5-12.91,0-24.61-11.64-33.85-33.66s-14.31-51-13.61-77.45c1.08-40.65,14.58-62.68,25.7-74,14.95-15.2,35.24-25.3,58.68-29.2,21.79-3.62,44.14-1.38,62.93,6.3C215.73,43.6,232,65.9,232,93.17Z" />
        </G>
      </Svg>
    );
  }

