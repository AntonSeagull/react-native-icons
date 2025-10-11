

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiHaskell = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4.619 24.32l5.356-8.034-5.356-8.034h4.017l5.356 8.034-5.356 8.034h-4.017zM9.975 24.32l5.356-8.034-5.356-8.034h4.017l10.712 16.068h-4.017l-3.347-5.021-3.348 5.021h-4.017zM27.381 19.633h-4.463l-1.785-2.678 6.249-0zM27.381 15.616h-7.141l-1.785-2.678 8.927-0z" fill="#444444" />
        </G>
      </Svg>
    );
  }

