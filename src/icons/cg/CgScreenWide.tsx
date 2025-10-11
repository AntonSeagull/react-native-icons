

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgScreenWide = (props: IconProps) => {

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
          <Path  d="M11 16H3C1.34315 16 0 14.6569 0 13V8C0 6.34315 1.34315 5 3 5H21C22.6569 5 24 6.34315 24 8V13C24 14.6569 22.6569 16 21 16H13V17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44771 19 8 18.5523 8 18C8 17.4477 8.44771 17 9 17H11V16ZM3 7H21C21.5523 7 22 7.44772 22 8V13C22 13.5523 21.5523 14 21 14H3C2.44772 14 2 13.5523 2 13V8C2 7.44772 2.44772 7 3 7Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

