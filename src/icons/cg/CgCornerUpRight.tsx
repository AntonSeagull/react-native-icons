

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgCornerUpRight = (props: IconProps) => {

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
          <Path d="M13.3724 14.7219L14.7835 16.1391L21.1612 9.78892L14.811 3.41125L13.3937 4.82242L17.1702 8.61526L6.86461 8.59304C4.65547 8.58828 2.86076 10.3753 2.85599 12.5844L2.83875 20.5844L4.83874 20.5887L4.85599 12.5887C4.85837 11.4841 5.75573 10.5907 6.8603 10.593L17.496 10.616L13.3724 14.7219Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

