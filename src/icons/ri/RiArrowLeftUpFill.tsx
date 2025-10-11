

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiArrowLeftUpFill = (props: IconProps) => {

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
          <Path  d="M12.3608 10.9468L18.0176 16.6037L16.6034 18.0179L10.9466 12.361L5.99683 17.3108V5.99707H17.3105L12.3608 10.9468Z" />
        </G>
      </Svg>
    );
  }

