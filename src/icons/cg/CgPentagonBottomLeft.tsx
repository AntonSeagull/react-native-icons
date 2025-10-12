

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPentagonBottomLeft = (props: IconProps) => {

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
          <Path  d="M13.3301 9.23205L10 5L5 13.6603L8.33013 17.8923L13.6603 18.6603L18.6603 10L13.3301 9.23205ZM15.4512 11.5583L12.2531 11.0975L10.255 8.5583L7.40908 13.4876L9.40716 16.0268L12.6052 16.4876L15.4512 11.5583Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

