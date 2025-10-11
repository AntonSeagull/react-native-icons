

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcAnswers = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#1976D2" d="M23.4,29.9c0-0.2,0-0.4,0.1-0.6s0.2-0.3,0.3-0.5s0.3-0.2,0.5-0.3s0.4-0.1,0.6-0.1s0.5,0,0.7,0.1 s0.4,0.2,0.5,0.3s0.2,0.3,0.3,0.5s0.1,0.4,0.1,0.6s0,0.4-0.1,0.6s-0.2,0.3-0.3,0.5s-0.3,0.2-0.5,0.3s-0.4,0.1-0.7,0.1 s-0.5,0-0.6-0.1s-0.4-0.2-0.5-0.3s-0.2-0.3-0.3-0.5S23.4,30.1,23.4,29.9z M26.1,26.8h-2.3L23.4,17h3L26.1,26.8z" />
        </G>
      </Svg>
    );
  }

