

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgAlignTop = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13.0352 7.98797L13.0374 13.988L17.0374 13.9865L17.0352 7.98653L13.0352 7.98797Z" fill="currentColor" />
          <Path d="M17.9996 4.01189L5.99963 4.01837L6.00038 6.01837L18.0004 6.01189L17.9996 4.01189Z" fill="currentColor" />
          <Path d="M11.0374 19.9864L11.0321 7.98637L7.03207 7.98813L7.03736 19.9881L11.0374 19.9864Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

