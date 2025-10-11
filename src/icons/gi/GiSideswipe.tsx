

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSideswipe = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M422.52 404.55c0-92.006-1.243-95.736-1.243-95.736 204.583-58.483-212.586-77.202-252.76-71.863l-.15 34.762-118.71-68.004 118.346-65.303 1.394 33.82c303.74-5.71 371.256 83.987 253.124 232.325z" fill="#000" />
        </G>
      </Svg>
    );
  }

