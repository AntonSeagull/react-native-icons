

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiDoorClosedFill = (props: IconProps) => {

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
          <Path d="M2.99805 21V19H4.99805V4C4.99805 3.44772 5.44576 3 5.99805 3H17.998C18.5503 3 18.998 3.44772 18.998 4V19H20.998V21H2.99805ZM14.998 11H12.998V13H14.998V11Z" />
        </G>
      </Svg>
    );
  }

