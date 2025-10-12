

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCloudDownloadSharp = (props: IconProps) => {

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
          <Path  d="M472.7,189.5c-15.76-10-36.21-16.79-58.59-19.54-6.65-39.1-24.22-72.52-51.27-97.26C334.15,46.45,296.21,32,256,32c-35.35,0-68,11.08-94.37,32a149.7,149.7,0,0,0-45.29,60.42c-30.67,4.32-57,14.61-76.71,30C13.7,174.83,0,203.56,0,237.6,0,305,55.92,352,136,352H240V208h32V352H396c72.64,0,116-34.24,116-91.6C512,230.35,498.41,205.83,472.7,189.5Z" />
        </G>
      </Svg>
    );
  }

