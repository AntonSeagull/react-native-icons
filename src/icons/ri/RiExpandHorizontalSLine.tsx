

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiExpandHorizontalSLine = (props: IconProps) => {

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
          <Path  d="M7.44975 7.05029L2.5 12L7.44727 16.9473L8.86148 15.5331L6.32843 13H17.6708L15.1358 15.535L16.55 16.9493L21.5 11.9996L16.5503 7.0498L15.136 8.46402L17.6721 11H6.32843L8.86396 8.46451L7.44975 7.05029Z" />
        </G>
      </Svg>
    );
  }

