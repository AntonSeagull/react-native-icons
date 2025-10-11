

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPentagonDown = (props: IconProps) => {

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
          <Path  d="M12 8L7 6V16L12 18.5L17 16V6L12 8ZM15 8.95407L12 10.1541L9 8.95407V14.7639L12 16.2639L15 14.7639V8.95407Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

