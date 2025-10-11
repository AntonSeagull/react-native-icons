

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoBookmarkFill = (props: IconProps) => {

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
          <Path d="M6.69 2h10.56c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.585L12 17.21l-5.781 4.626A.75.75 0 0 1 5 21.253L4.94 3.756A1.748 1.748 0 0 1 6.69 2Z" />
        </G>
      </Svg>
    );
  }

