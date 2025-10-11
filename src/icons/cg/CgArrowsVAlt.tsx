

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowsVAlt = (props: IconProps) => {

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
          <Path  d="M9.1716 6.45504L7.75739 5.04083L12 0.798187L16.2426 5.04083L14.8284 6.45504L13.0001 4.62667V19.3733L14.8284 17.5449L16.2426 18.9592L12 23.2018L7.75739 18.9592L9.1716 17.5449L11.0001 19.3734V4.62658L9.1716 6.45504Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

