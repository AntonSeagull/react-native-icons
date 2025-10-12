

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSleep = (props: IconProps) => {

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
          <Path  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16.899 17C15.6364 18.2372 13.9073 19 12 19C10.0927 19 8.36355 18.2372 7.10102 17H16.899ZM18.3264 15C18.7583 14.0907 19 13.0736 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.0736 5.24169 14.0907 5.67363 15H18.3264Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

