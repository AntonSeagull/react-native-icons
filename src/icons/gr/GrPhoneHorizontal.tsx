

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrPhoneHorizontal = (props: IconProps) => {

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
          <Path  d="M23 7C23 5.89543 22.1046 5 21 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V7ZM21 12.9957V17H3V7H21V11.0043C20.9691 11.0015 20.9379 11 20.9062 11H19.9062C19.354 11 18.9062 11.4477 18.9062 12C18.9062 12.5523 19.354 13 19.9062 13H20.9062C20.9379 13 20.9691 12.9985 21 12.9957Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

