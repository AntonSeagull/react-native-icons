

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiMediaPlay = (props: IconProps) => {

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
          <Path d="M10.396 18.433c2.641-2.574 6.604-6.433 6.604-6.433s-3.963-3.859-6.604-6.433c-.363-.349-.853-.567-1.396-.567-1.104 0-2 .896-2 2v10c0 1.104.896 2 2 2 .543 0 1.033-.218 1.396-.567z" />
        </G>
      </Svg>
    );
  }

