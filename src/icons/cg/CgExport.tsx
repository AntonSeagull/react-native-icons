

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgExport = (props: IconProps) => {

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
          <Path  d="M16.9498 5.96781L15.5356 7.38203L13 4.84646V17.0421H11V4.84653L8.46451 7.38203L7.05029 5.96781L12 1.01807L16.9498 5.96781Z" fill="currentColor" />
          <Path  d="M5 20.9819V10.9819H9V8.98193H3V22.9819H21V8.98193H15V10.9819H19V20.9819H5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

