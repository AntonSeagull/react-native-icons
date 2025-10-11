

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgToolbarRight = (props: IconProps) => {

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
          <Path  d="M16 9H18V15H16V9Z" fill="currentColor" />
          <Path  d="M22 8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8ZM19 7H5C4.44772 7 4 7.44771 4 8V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

