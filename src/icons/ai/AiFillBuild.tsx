

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const AiFillBuild = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 512, 512)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM612 746H412V546h200v200zm268-268H680V278h200v200z" />
        </G>
      </Svg>
    );
  }

