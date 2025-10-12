

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSunnySnowing = (props: IconProps) => {

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
          <Path  d="M13 5h-2V1h2v4zM1 11h4v2H1v-2zm18 2v-2h4v2h-4zm-1.34-5.24-1.41-1.41 2.83-2.83 1.41 1.41-2.83 2.83zM3.51 4.93l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zM4.75 17a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm12 0a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm-9 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm3-4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm3 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zM17 13v-1c0-2.76-2.24-5-5-5s-5 2.24-5 5v1h10z" />
        </G>
      </Svg>
    );
  }

