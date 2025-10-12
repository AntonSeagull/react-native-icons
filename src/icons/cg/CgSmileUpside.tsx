

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSmileUpside = (props: IconProps) => {

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
          <Path  d="M16 11H14C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11H8C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z" fill="currentColor" />
          <Path  d="M10 14C10 13.4477 9.55228 13 9 13C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14Z" fill="currentColor" />
          <Path  d="M15 13C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13Z" fill="currentColor" />
          <Path  d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

